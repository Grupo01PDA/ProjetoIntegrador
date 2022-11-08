const express = require("express")
const chamandoRankingsController = require("../controllers/ranking/chamandoRankingsController");
const chamandoUsuariosPorRanqueController = require("../controllers/ranking/chamandoUsuariosPorRanqueController");
const criandoRankingController = require("../controllers/ranking/criandoRankingsController");

const rankRoute = express.Router();

rankRoute.get("/rankings/global", chamandoUsuariosPorRanqueController);

rankRoute.get("/rankings", chamandoRankingsController);

rankRoute.post("/rankings/criando/:id", criandoRankingController);

module.exports = rankRoute;