import * as _ from 'lodash'
import { fetchEvents } from '../db/analytic_event';
import { AnalyticEvent } from '../models/analytic_data';
const mkdirp = require('mkdirp')
import * as request from 'request'
import * as fs from 'fs'
import { v4 } from 'uuid'
import { config } from '../config';
// import * as AWS from 'aws-sdk'
import { Readable } from 'stream';
// import * as gm from 'gm'

export async function getAllEvents(limit: number): Promise<AnalyticEvent[]> {
    return fetchEvents(null, limit);
}
