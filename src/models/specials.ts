export enum PriceType {
    fixed = 'fixed',
    percent = 'percent'
}

export enum SpecialType {
    fixed = 'fixed',
    percent = 'percent'
}

export interface Special {
    id: number,
    name: string,
    image_url: string,
    description: string,
    highlight: boolean,
    type: SpecialType,
    priceType: PriceType,
    price: number,
    meta?: any
}
