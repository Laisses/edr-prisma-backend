import * as h from "./handlers.js";

export const routes = app => {
    app.get("/health", (_req, res) => {
        res.send("OK");
    });

    app.get("/", h.getPlaces);
};