const criandoPostsController = require('../../models/posts');

const criandoPostsController = async (req, res)=>{
const db = require('../../models/posts')
const posts = require('../../models/posts')
await db.sync()
const { documents, description, qtdLike, qtdComentario, qtdCompartilhamento } = req.body
const novoPost = await posts.create({
    documents,
    description,
    qtdLike,
    qtdComentario,
    qtdCompartilhamento
})
    return res.status(202).json({ posts: novoPost })
};
module.exports = criandoPostsController;

