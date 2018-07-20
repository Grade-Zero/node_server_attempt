import { Route, Get, Post, Tags, Body, Query } from 'tsoa';
import { StandardResponse } from '../models/standard';
import { AnalyticDataApi, AnalyticDataDb, AnalyticDataNoIdDb } from '../models/analytic_data';
import { addData, getAllData } from '../services/analytic_data';
// import { addData } from '../services/analytic_data';
const mkdirp = require('mkdirp')

@Route('analytic_data')
export class AnalyticDataController {

    @Post('data')
    @Tags('Open')
    public async Data(
        @Body() body: AnalyticDataNoIdDb
    ): Promise<StandardResponse<AnalyticDataDb>> {
        let res = await addData(body)
        return {data: res, meta: {}};
    }

    @Get('data')
    @Tags('Open')
    public async Categories(
        @Query() limit?: number,
    ): Promise<StandardResponse<AnalyticDataDb[]>> {
        let data = await getAllData(
            limit || 10
        )
        return {data, meta: {}};
    }

}

