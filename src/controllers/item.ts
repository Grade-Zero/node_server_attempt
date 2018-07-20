import { Route, Get, Post, Tags, Body, Query, Request, Controller, Security } from 'tsoa';
import { StandardResponse } from '../models/standard';
import { ItemCategory, Item, ItemSize } from '../models/item';
import { getCategories, getCategoryById, getItems, getItemById, getItemsByCategory, getItemSizesByItem, getItemSizes } from '../services/item'

@Route('item')
export class ItemController extends Controller {

    @Get('categories')
    @Tags('Items')
    public async Categories(
        @Query() limit?: number,
    ): Promise<StandardResponse<ItemCategory[]>> {
        let data = await getCategories(
            limit || 10
        )
        return {data, meta: {}};
    }

    @Get('category/{id}')
    @Tags('Items')
    public async CategoryById(id: number): Promise<StandardResponse<ItemCategory>> {
        let data = await getCategoryById(id)
        return {data, meta: {}};
    }

    @Get('items')
    @Tags('Items')
    public async Items(
        @Query() limit?: number,
    ): Promise<StandardResponse<Item[]>> {
        let data = await getItems()
        return {data, meta: {}};
    }

    @Get('item/{id}')
    @Tags('Items')
    public async ItemById(id: number): Promise<StandardResponse<Item>> {
        let data = await getItemById(id)
        return {data, meta: {}};
    }

    @Get('in_category/{id}')
    @Tags('Items')
    public async ItemsByCategory(id: number): Promise<StandardResponse<Item[]>> {
        let data = await getItemsByCategory(id)
        return {data, meta: {}};
    }

    @Get('sizes')
    @Tags('Items')
    public async ItemSizes(): Promise<StandardResponse<ItemSize[]>> {
        let data = await getItemSizes()
        return {data, meta: {}};
    }

    @Get('sizes/{id}')
    @Tags('Items')
    public async ItemSizesByItem(id: number): Promise<StandardResponse<ItemSize[]>> {
        let data = await getItemSizesByItem(id)
        return {data, meta: {}};
    }
}

// @Route('itemsizes')
// export class ItemSizeController extends Controller {

//     @Get('item/{id}')
//     @Tags('Items')
//     public async ItemSizesByItem(): Promise<StandardResponse<ItemSize[]>> {
//         let data = await getItemSizesByItem()
//         return {data, meta: {}};
//     }
// }
