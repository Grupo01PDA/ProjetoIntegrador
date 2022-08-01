const express = require("express")
const chamandoRankingsController = require("../controllers/ranking/chamandoRankingsController")
const rankRoute = express.Router();

rankRoute.get.chamandoRankcontroller("/rank", chamandoRankController)
rankRoute.get("/rankings", chamandoRankingsController)
module.exports = rankRoute;