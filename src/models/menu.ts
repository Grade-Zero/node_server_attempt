import { Item, ItemSize, ItemOptions } from './item'
import { Tag } from './tag'
import { Special } from './specials'

export interface MenuItem {
    item: Item,
    sizes: ItemSize[],
    tags: Tag[],
    specials: Special[],
    itemOptions: ItemOptions[],
    extras: [{
       item: Item,
       size: ItemSize[],
       specials: Special[]
    }]
}
