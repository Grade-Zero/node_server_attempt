import { queryHandler, query, OptionalConnection, extractSingle } from './connection'
import { PoolConnection } from 'mysql'
import { UserDb } from '../models/user';

export function getUserByUsername (optionalConnection: OptionalConnection, email: string): Promise<UserDb | null> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const user = await query<UserDb[]>(connection, {
        sql: `SELECT * FROM users WHERE email = ?`,
        values: [email]
    })
    return extractSingle<UserDb>(user)
  })
}

export function getUserById (optionalConnection: OptionalConnection, id: number): Promise<UserDb | null> {
  return queryHandler(optionalConnection, async function (connection: PoolConnection) {
    const user = await query<UserDb[]>(connection, {
        sql: `SELECT * FROM users WHERE id = ?`,
        values: [String(id)]
    })
    return extractSingle<UserDb>(user)
  })
}
