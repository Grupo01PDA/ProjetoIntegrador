const express = require("express")
const chamandoRankcontroller = require("../controllers/")

const rankRoute = express.Router();
rankRoute.get.chamandoRankcontroller("/rank", chamandoRankController)

module.exports = rankRoute;