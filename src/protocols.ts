export interface Place {
    id: number,
    name: string,
    category: string,
    rating?: string | null
};

export type NewPlace = {
    name: string,
    category: string,
    rating?: string | null
};

export interface CountResult {
    count: number
};
