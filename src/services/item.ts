import { ItemCategory, Item, ItemSize } from '../models/item';
import { getItemCategories, getItemCategoryById, retrieveItems, retrieveItemById, retrieveItemsByCategory, retrieveItemSizesByItem, retrieveItemSizes } from '../db/item';
import { InvalidRequest } from '../utils/custom_error';
import * as crypto from 'crypto'
import { v4, v1 } from 'uuid'

export async function getCategories(limit: number): Promise<ItemCategory[]> {
    return getItemCategories(null, limit);
}

export async function getCategoryById(id: number): Promise<ItemCategory> {
    console.log('Get category by id ' + id);
    return await getItemCategoryById(null, id) as ItemCategory
}


export async function getItems(): Promise<Item[]> {
    return retrieveItems(null);
}

export async function getItemById(id: number): Promise<Item> {
    return await retrieveItemById(null, id) as Item
}

export async function getItemsByCategory(id: number): Promise<Item[]> {
    return retrieveItemsByCategory(null, id)
}

export async function getItemSizes(): Promise<ItemSize[]> {
    return retrieveItemSizes(null)
}

export async function getItemSizesByItem(id: number): Promise<ItemSize[]> {
    return retrieveItemSizesByItem(null, id)
}
