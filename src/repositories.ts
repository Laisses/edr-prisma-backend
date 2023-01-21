import { QueryResult } from "pg";
import {connection} from "./database.js";
import { Place, NewPlace } from "./protocols.js";

export const selectPlaces = async (): Promise<QueryResult<Place>> => {
    return connection.query(`SELECT * FROM places;`);
};

export const insertPlace = async (place: NewPlace) => {
    return connection.query(`INSERT INTO places (name, category) VALUES ($1, $2);`, [place.name, place.category]);
};