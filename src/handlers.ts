import {Request, Response} from "express";
import { NewPlace } from "./protocols.js";
import * as r from "./repositories.js";

export const health = (_req: Request, res: Response) => {
    res.send("OK");
};

export const getPlaces = async (_req: Request, res: Response) => {
    const places = await r.selectPlaces();
    res.status(200).send(places.rows);
};