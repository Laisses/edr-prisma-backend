import { QueryResult } from "pg";
import {connection} from "./database.js";
import { Place, NewPlace } from "./protocols.js";

export const selectPlaces = async (): Promise<QueryResult<Place>> => {
    return connection.query(`SELECT * FROM places;`);
};