import * as h from "./handlers.js";
import { Express } from "express";


export const routes = (app: Express) => {
    app.get("/health", h.health);

    app.get("/", h.getPlaces);
    app.post("/", h.addPlace);
};