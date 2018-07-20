
export interface Item {
    id: number,
    name: string,
    short_description: string,
    long_description: string,
    image_url: string,
    category_id: number,
    created_at: Date
}

export enum ItemOptionTypes {
    dropdown = 'dropdown',
    checkbox = 'checkbox',
}

export interface ItemOptions {
    id: number,
    property: string,
    type: ItemOptionTypes,
    values: ItemOptionValue[]
}

export interface ItemOptionValue {
    itemOptionId: number
    selected: boolean,
    value: string
}

export interface ItemSize {
    id: number,
    itemId: number,
    sku?: string,
    name: string,
    short_description?: string,
    long_description?: string,
    image_url: string,
    priceInDollars: number,
    quantity: number,
    kj: number,
}


export interface ItemCategory {
    id: number,
    name: string,
    parent_id: number,
    created_at: Date
}
