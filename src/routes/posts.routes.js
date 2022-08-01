const express = require('éxpress);
const chamandoPostsController = require("../controllers/posts/chamandoPostsController");
const criandoPostsController = require('../controllers/posts/criandoUsuarioController');
const mudandoPostsController = require("../controllers/posts/mudandoPostsController");
const deletandoPostsController = require("../controllers/posts/deletandoPostsController");

const postsRoute = express.Router()

postsRoute.post("/posts", criandoPostsController)
postsRoute.get("/posts", chamandoPostsController)
postsRoute.put("/posts", mudandoPostsController)
postsRoute.delete(("/posts", deletandoPostsController))

module.exports = postsRoute;