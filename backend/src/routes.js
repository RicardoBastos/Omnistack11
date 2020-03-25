const express = require("express");
const OngController = require("./controllers/OngController");

const IncidentsController = require("./controllers/IncidentController");

const ProfileController = require("./controllers/ProfileController");

const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.craete);

routes.post("/ongs", OngController.craete);
routes.get("/ongs", OngController.index);

routes.get("/profile", ProfileController.index);

routes.post("/incidents", IncidentsController.craete);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
