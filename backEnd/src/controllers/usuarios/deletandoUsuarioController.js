const deletandoUsuarioController = async (req, res) =>{
  let usuario = require("../../models/user");
  const id = req.params.id;
  const pessoa = await usuario.findByPk(id);
  await usuario.destroy({
      where:{
          id: id
      }
  });
  return res.json({ mensagem: "Usuario deletado com sucesso: ", pessoa })
};
module.exports = deletandoUsuarioController;
