import { Request, Response, NextFunction } from "express";
import * as r from "./repositories.js";

export const validateId = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const place = await r.selectPlaceById(Number(id));

    if (!place.rows[0]) {
        return res.status(404).send({message: "could not find specified place"});
    }

    next();
};