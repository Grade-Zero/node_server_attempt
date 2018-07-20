import { queryHandler, query, OptionalConnection, extractSingle } from './connection'
import { PoolConnection } from 'mysql'
import { ItemCategory, Item, ItemSize } from '../models/item';

export function getItemCategories (optionalConnection: OptionalConnection, maxEntries: number): Promise<ItemCategory[]> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const itemCategories = await query<ItemCategory[]>(connection, {
        sql: `SELECT * FROM item_categories LIMIT ?`,
        values: [maxEntries]
    })
    return itemCategories
  })
}

export function getItemCategoryById (optionalConnection: OptionalConnection, id: number): Promise<ItemCategory | null> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const itemCategory = await query<ItemCategory[]>(connection, {
        sql: `SELECT * FROM item_categories WHERE id = ?`,
        values: [String(id)]
    })
    return extractSingle<ItemCategory>(itemCategory)
  })
}


export function retrieveItems (optionalConnection: OptionalConnection): Promise<Item[]> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const items = await query<Item[]>(connection, {
        sql: `SELECT * FROM items`
    })
    return items
  })
}

export function retrieveItemById (optionalConnection: OptionalConnection, id: number): Promise<Item | null> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const item = await query<Item[]>(connection, {
        sql: `SELECT * FROM items WHERE id = ?`,
        values: [String(id)]
    })
    return extractSingle<Item>(item)
  })
}

export function retrieveItemsByCategory (optionalConnection: OptionalConnection, id: number): Promise<Item[]> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const items = await query<Item[]>(connection, {
        sql: `SELECT * FROM items WHERE category_id = ?`,
        values: [String(id)]
    })
    return items
  })
}

export function retrieveItemSizes (optionalConnection: OptionalConnection): Promise<ItemSize[]> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const items = await query<ItemSize[]>(connection, {
        sql: `SELECT * FROM item_sizes`
    })
    return items
  })
}

export function retrieveItemSizesByItem (optionalConnection: OptionalConnection, id: number): Promise<ItemSize[]> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const items = await query<ItemSize[]>(connection, {
        sql: `SELECT * FROM item_sizes WHERE item_id = ?`,
        values: [String(id)]
    })
    return items
  })
}
