import * as h from "./handlers.js";
import * as m from "./middlewares.js";
import * as s from "./schemas.js";
import { Express } from "express";


export const routes = (app: Express) => {
    app.get("/health", h.health);

    app.get("/", h.getPlaces);
    app.post("/", m.validate(s.PlaceSchema), h.addPlace);
    app.put("/:id", m.validate(s.PlaceSchema), m.validateId, h.editPlace);
};
