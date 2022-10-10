const deletandoPostsController = async (req,res)=>{
    let posts = require("../../models/posts")
    const id = req.params.id;
    const publicacao = await posts.findByOne(id);
    await posts.destroy({
        where:{
            id: id
        }
    });
    return res.json({mensagem: "Posts deletado com sucessi!", publicacao})
};

module.exports = deletandoPostsController;