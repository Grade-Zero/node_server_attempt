import { queryHandler, query, OptionalConnection, extractSingle } from './connection'
import { PoolConnection } from 'mysql'
import { AnalyticEvent } from '../models/analytic_data';

export function fetchEvents (optionalConnection: OptionalConnection, maxEntries: number): Promise<AnalyticEvent[]> {
    return queryHandler(optionalConnection, async function (connection: PoolConnection) {
      const dataQuery = await query<AnalyticEvent[]>(connection, {
          sql: `SELECT * FROM analytic_events LIMIT ?`,
          values: [maxEntries]
      })
      return dataQuery
    })
}
