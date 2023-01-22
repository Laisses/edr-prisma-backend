import { Request, Response } from "express";
import { NewPlace } from "./protocols.js";
import * as r from "./repositories.js";

export const health = (_req: Request, res: Response) => {
    res.send("OK");
};

export const getPlaces = async (_req: Request, res: Response) => {
    const placesList = await r.selectPlaces();
    return res.status(200).send(placesList.rows);
};

export const addPlace = async (req: Request, res: Response) => {
    const newPlace = req.body as NewPlace;
    await r.insertPlace(newPlace);
    res.sendStatus(201);
};