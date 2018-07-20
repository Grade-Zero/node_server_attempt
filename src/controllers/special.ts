import { Route, Get, Post, Tags, Body, Query, Request, Controller, Security } from 'tsoa';
import { StandardResponse } from '../models/standard';
import { Special } from '../models/specials';
import { getSpecials } from '../services/special';

@Route('item')
export class SpecialController extends Controller {

    @Get('specials')
    @Tags('Items')
    public async Specials(): Promise<StandardResponse<Special[]>> {
        let data = await getSpecials()
        return {data, meta: {}};
    }
}
