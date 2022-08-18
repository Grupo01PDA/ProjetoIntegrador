const mudandoPostsController = async (req,res)=>{
    const posts = require ("../..//models/posts")
    const id = req.params.id 
    const { documents, description, qtdLike, qtdComentario, qtdCompartilhamento } = req.body
    posts = await posts.findByPK(id)
    await posts.update({
        documents: documents || posts.documents,
        description: description || posts.description,
        qtdLike: qtdLike || posts.qtdLike,
        qtdComentario: qtdComentario || posts.qtdComentario,
        qtdCompartilhamento: qtdCompartilhamento || posts.qtdCompartilhamento
    },
    { where: { id: id }}
    )
    const postAtualizado = await posts.findByPK(id)
    return res.json({ usuario: postAtualizado});
};
module.exports = mudandoPostsController;