import { QueryResult } from "pg";
import {connection} from "./database.js";
import { Place, NewPlace } from "./protocols.js";

export const selectPlaces = async (): Promise<QueryResult<Place>> => {
    return connection.query(`SELECT * FROM places ORDER BY id;`);
};

export const insertPlace = async ({name, category}: NewPlace) => {
    return connection.query(`INSERT INTO places (name, category) VALUES ($1, $2);`, [name, category]);
};

export const selectPlaceById = async (id: number): Promise<QueryResult<Place>> => {
    return connection.query(`SELECT * FROM places WHERE id=$1;`, [id]);
};

export const UpdatePlace = async ({name, category, id}: Place) => {
    return connection.query(`UPDATE places SET name=$1, category=$2 WHERE id=$3;`, [name, category, id]);
};