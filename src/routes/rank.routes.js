const express = require("express")
const chamandoRankingsController = require("../controllers/ranking/chamandoRankingsController")

const rankRoute = express.Router();
<<<<<<< HEAD
rankRoute.get.chamandoRankcontroller("/rank", chamandoRankController)
=======

rankRoute.get("/rankings", chamandoRankingsController)
>>>>>>> 1a2b434d4b7239b3b0a87a6f61c1f94ec8783d6a

module.exports = rankRoute;