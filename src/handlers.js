import * as r from "./repositories.js";

export const getPlaces = async (_req, res) => {
    const places = await r.selectPlaces();
    res.status(200).send(places.rows);
};