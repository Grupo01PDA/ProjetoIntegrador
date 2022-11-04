const Sequelize = require('sequelize');
const db = require('../connection/db');

const Usuario = db.define('usuarios', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true  
    },
    apelido: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    escolaridade: {
        type: Sequelize.DataTypes.INTEGER(4),
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    sttsLogin: {
        type: Sequelize.DataTypes.BOOLEAN,
        default: false,
        allowNull: true
    }
},{
    timestamps: false
});

// Usuario.hasMany(post,{
//     foreignKey: 'postUsuarioId'
// });
// post.belongsTo(Usuario,{
//     constraint:true,
//     foreignKey: 'postUsuarioId'
// });  


module.exports = Usuario;

