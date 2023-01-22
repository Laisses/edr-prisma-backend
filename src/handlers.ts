import { Request, Response } from "express";
import { NewPlace, Place } from "./protocols.js";
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
    return res.sendStatus(201);
};

export const editPlace = async (req: Request, res: Response) => {
    const {id} = req.params;
    const changes = req.body as NewPlace;
    const newPlace: Place = {id: Number(id), ...changes};

    await r.UpdatePlace(newPlace);

    return res.sendStatus(200);
};
