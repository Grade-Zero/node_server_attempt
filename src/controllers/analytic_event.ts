import { Route, Get, Post, Tags, Body, Query } from 'tsoa';
import { StandardResponse } from '../models/standard';
import { AnalyticEvent } from '../models/analytic_data';
import { getAllEvents } from '../services/analytic_event';
// import { addData } from '../services/analytic_data';
const mkdirp = require('mkdirp')

@Route('analytic_data')
export class AnalyticEventController {

    @Get('events')
    @Tags('Open')
    public async Events(
        @Query() limit?: number,
    ): Promise<StandardResponse<AnalyticEvent[]>> {
        let data = await getAllEvents(
            limit || 10
        )
        return {data, meta: {}};
    }

}

