
export interface Order {
    id: number,
    name: string,
    items: OrderItem[],
    totalPrice: number,
    created_at: Date
}

export interface OrderItem {
    itemId: number,
    optionIds: number[]
    specialIds: number[]
    extraIds: number[]
    totalPrice: number,
    ex: string
}

export interface OrderListItem {
    itemId: number,
    optionIds: number[]
    specialIds: number[]
    extraIds: number[]
    totalPrice: number,
    ex: string
}
