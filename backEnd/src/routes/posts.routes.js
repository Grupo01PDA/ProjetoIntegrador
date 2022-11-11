const express = require('express')
const chamandoPostsController = require("../controllers/posts/chamandoPostsController");
const criandoPostsController = require("../controllers/posts/criandoPostsController");
const mudandoPostsController = require("../controllers/posts/mudandoPostsController");
const deletandoPostsController = require("../controllers/posts/deletandoPostsContoller");
const chamandoPostPkController = require("../controllers/posts/chamandoPostPkController")

const postsRoute = express.Router()

postsRoute.post("/posts/:id", criandoPostsController)
postsRoute.get("/posts/todos", chamandoPostsController)
postsRoute.get("/posts/usuario/:id", chamandoPostPkController)
postsRoute.put("/posts/:id", mudandoPostsController)
postsRoute.delete("/posts/:id", deletandoPostsController)

module.exports = postsRoute;