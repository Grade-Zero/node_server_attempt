import { queryHandler, query, OptionalConnection, extractSingle } from './connection'
import { PoolConnection } from 'mysql'
import { AnalyticDataDb, AnalyticDataNoIdDb } from '../models/analytic_data';
import { InsertId } from '../models/standard';

export function createAnalyticData (optionalConnection: OptionalConnection, data: AnalyticDataNoIdDb): Promise<string> {
  return queryHandler(optionalConnection, async function (client: PoolConnection) {
    await query<any[]>(client, {
        sql: `INSERT INTO analytics SET ?;`,
    }, data)
    const newAnalyticDataEntry = await query<InsertId[]>(client, {
      sql: `SELECT LAST_INSERT_ID();`
    })
    return newAnalyticDataEntry[0]['LAST_INSERT_ID()']
  })
}

export function fetchAllData (optionalConnection: OptionalConnection, maxEntries: number): Promise<AnalyticDataDb[]> {
    return queryHandler(optionalConnection, async function (connection: PoolConnection) {
      const dataQuery = await query<AnalyticDataDb[]>(connection, {
          sql: `SELECT * FROM analytics LIMIT ?`,
          values: [maxEntries]
      })
      return dataQuery
    })
}
