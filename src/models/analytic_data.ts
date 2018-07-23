export interface AnalyticDataDb extends AnalyticDataNoIdDb {
    id: number,
}

export interface AnalyticEvent {
    id: number,
    event_name: string,
    event_value?: string,
}

// Some of these will be null
// export interface AnalyticDataNoIdDb {
//     device: string,
//     store_id: number
//     event: AnalyticEvent,
//     category?: string,
//     range?: string,
//     unique_value: string,
// }
export interface AnalyticDataNoIdDb {
    device: string,
    store_id: number
    event: JSON
}

// Just an enum example that might come in handy
export enum AnalyticEvents {
    YourFloorUpload = 'YourFloorUpload',
    YourFloorAccessed = 'YourFloorAccessed',
    YourFloorSkipped = 'YourFloorSkipped',
    CustomerEmail = 'CustomerEmail',
    StoreEmail = 'StoreEmail',
    VideoViewed = 'VideoViewed',
    RoomVisited = 'RoomVisited',
    CategoryVisited = 'CategoryVisited',
    CampaignSelected = 'CampaignSelected',
    PaintAccessed = 'PaintAccessed',
    FeaturesAccessed = 'FeaturesAccessed',
    FloorCalculatorAccessed = 'FloorCalculatorAccessed',
    AppStart = 'AppStart',
    AppIdle = 'AppIdle'
}

export interface AnalyticAll {
    data: AnalyticDataDb[],
    events: AnalyticEvent[]
}

export interface AnalyticDataApi {
    success: boolean
}
