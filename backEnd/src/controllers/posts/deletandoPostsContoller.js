const deletandoPostsController = async (req,res)=>{
    let posts = require("../../models/posts")
    const id = req.params.id;
    const publicacao = await posts.findByPk(id);
    await posts.destroy({
        where:{
            id: id
        }
    });
    return res.json({mensagem: "Posts deletado com sucesso!", publicacao})
};

module.exports = deletandoPostsController;