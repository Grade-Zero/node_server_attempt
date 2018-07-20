export interface AnalyticDataDb extends AnalyticDataNoIdDb {
    id: number,
}

export interface AnalyticDataNoIdDb {
    event: string,
    unique_value: string,
}

// Just an enum example that might come in handy
export enum MediaContentTypes {
    image = 'image',
    video = 'video',
    website = 'website'
}

export interface AnalyticDataApi {
    success: boolean
}
