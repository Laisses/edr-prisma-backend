import * as h from "./handlers.js";
import * as m from "./middlewares.js";
import { Express } from "express";


export const routes = (app: Express) => {
    app.get("/health", h.health);

    app.get("/", h.getPlaces);
    app.post("/", h.addPlace);
    app.put("/:id", m.validateId, h.editPlace);
};
