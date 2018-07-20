import * as _ from 'lodash'
import { createAnalyticData, fetchAllData } from '../db/analytic_data';
import { AnalyticDataDb, AnalyticDataNoIdDb, MediaContentTypes } from '../models/analytic_data';
const mkdirp = require('mkdirp')
import * as request from 'request'
import * as fs from 'fs'
import { v4 } from 'uuid'
import { config } from '../config';
// import * as AWS from 'aws-sdk'
import { Readable } from 'stream';
// import * as gm from 'gm'

export async function addData(data: AnalyticDataNoIdDb): Promise<AnalyticDataDb> {
    let baseData = {
       id: 3,
       event: 'Room',
       unique_value: 'Kitchen 1'
    }
    let insert = {...baseData, ...data}
    let id = await createAnalyticData(null, insert)
    return {...insert, id: Number(id)}
}

export async function getAllData(limit: number): Promise<AnalyticDataDb[]> {
    return fetchAllData(null, limit);
}
