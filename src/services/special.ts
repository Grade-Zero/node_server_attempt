import { Special } from '../models/specials';
import { retrieveSpecials } from '../db/special';

export async function getSpecials(): Promise<Special[]> {
    return retrieveSpecials(null);
}
