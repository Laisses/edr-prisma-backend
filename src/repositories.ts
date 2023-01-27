import { places } from "@prisma/client";
import { QueryResult } from "pg";
import { prisma } from "./database.js";
import { Place, NewPlace, CountResult } from "./protocols.js";

export const selectPlaces = () => {
    return prisma.places.findMany({
        orderBy: [
            {
                name: "asc",
            }
        ]
    });
};

 export const insertPlace = (place: NewPlace) => {
    return prisma.places.create({
        data: place
    });
};

export const selectPlaceById = (id: number) => {
    return prisma.places.findUnique({
        where: {
            id
        }
    });
};

/*
export const updatePlace = async ({ name, category, id }: Place) => {
    return connection.query(`UPDATE places SET name=$1, category=$2 WHERE id=$3;`, [name, category, id]);
};

export const updateRatings = async (id: number, evaluation: string) => {
    return connection.query(`UPDATE places SET rating=$1 WHERE id=$2`, [evaluation, id]);
};

export const deletePlace = async (id: number) => {
    return connection.query(`DELETE FROM places WHERE ID=$1;`, [id]);
};

export const countPlaces = async (): Promise<QueryResult<CountResult>> => {
    return connection.query(`SELECT COUNT(*) FROM places;`);
};

export const countReviews = async (): Promise<QueryResult<CountResult>> => {
    return connection.query(`SELECT COUNT(rating) FROM places;`);
}; */