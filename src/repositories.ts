import { prisma } from "./database.js";
import { Place, NewPlace } from "./protocols.js";

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

/* export const updatePlace = async ({ name, category, id }: Place) => {
    return prisma.places.update({
        where: {
            id,
        },
        data: {
            name,
            category_id
        }
    });
}; */

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

export const countPlaces = async () => {
    return prisma.places.count();
};

export const countReviews = async () => {
    return prisma.places.count({
        select: {
            rating: true
        }
    });
};