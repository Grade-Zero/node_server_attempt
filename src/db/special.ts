import { queryHandler, query, OptionalConnection, extractSingle } from './connection'
import { PoolConnection } from 'mysql'
import { Special } from '../models/specials';

export function retrieveSpecials (optionalConnection: OptionalConnection): Promise<Special[]> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const items = await query<Special[]>(connection, {
        sql: `SELECT * FROM specials`
    })
    return items
  })
}
