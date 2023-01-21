import {connection} from "./database.js";

export const selectPlaces = async () => {
    return connection.query(`SELECT * FROM places;`);
};