import { prisma } from "./database.js";
import { Place, NewPlace, CountResult } from "./protocols.js";

export const selectPlaces = async () => {
    return prisma.places.findMany({
        orderBy: [
            {
                name: "asc",
            }
        ]
    });
};

export const selectPlaceById = async (id: number) => {
    return prisma.places.findUnique({
        where: {
            id
        }
    });
};

export const insertPlace = (place: NewPlace) => {
    return prisma.places.create({
        data: place
    });
};

export const updatePlace = async ({ name, category, id }: Place) => {
    return prisma.places.update({
        where: {
            id,
        },
        data: {
            name,
            category
        }
    });
};

export const updateRatings = async (id: number, rating: string) => {
    return prisma.places.update({
        where: {
            id,
        },
        data: {
            rating
        }
    });
};

export const deletePlace = async (id: number) => {
    return prisma.places.delete({
        where: {
            id,
        }
    });
};


/*
export const countPlaces = async (): Promise<QueryResult<CountResult>> => {
    return connection.query(`SELECT COUNT(*) FROM places;`);
};

export const countReviews = async (): Promise<QueryResult<CountResult>> => {
    return connection.query(`SELECT COUNT(rating) FROM places;`);
}; */


//I guess...
/* export const upsertPlace = async (place: PartialPlace) => {
    return prisma.places.upsert({
        where: {
            id: place.id || 0,
        },
        create: place as NewPlace,
        update: place
    });
}; */