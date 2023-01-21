import * as h from "./handlers.js";

export const routes = app => {
    app.get("/health", h.health);

    app.get("/", h.getPlaces);
};