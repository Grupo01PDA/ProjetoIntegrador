const express = require('express')
const chamandoPostsController = require("../controllers/posts/chamandoPostsController");
const criandoPostsController = require("../controllers/posts/criandoPostsController");
const mudandoPostsController = require("../controllers/posts/mudandoPostsController");
const deletandoPostsController = require("../controllers/posts/deletandoPostsContoller");
const chamandoPostsPkController = require('../controllers/posts/chamandoPostPkController');

const postsRoute = express.Router()

postsRoute.post("/posts/:id", criandoPostsController)
postsRoute.get("/posts/todos", chamandoPostsController)
postsRoute.get("/posts/:id" , chamandoPostsPkController)
postsRoute.put("/posts/:id", mudandoPostsController)
postsRoute.delete("/posts/", deletandoPostsController)

module.exports = postsRoute;