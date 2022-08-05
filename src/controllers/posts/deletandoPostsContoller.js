const Usuario = require("../../models/user");

const deletandoPostController = async (req,res)=>{
    let posts = require("../../models/posts")
    const id = req.params.id;
    const publcar = await posts.findByPk(id);
    await Usuario.destroy({
        where:{
            id: id
        }
    });
    return res.json({mensagem: "Posts deletado!"})
};

module.exports = deletandoPostController;