const Sequelize = require('sequelize');
const db = require('../connection/db');
const usuario = require("../models//user")

const posts = db.define('posts', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true  
    },
    tema: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false        
    },
    documents: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    } ,
    qtdLike: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
     },
    qtdComentario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
    },
    qtdCompartilhamento: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    }},{
        timestamps: false,
        paranoid: true     
    },{
        timesTamps: false
    })

usuario.hasMany(posts,{
    type: Sequelize.DataTypes.UUID,
    foreignKey: 'postUsuarioId'
});
posts.belongsTo(usuario);  

/*
A.hasOne(B); 1-1 / chave estrangeira sendo definida no modelo de destino ( B)
A.belongsTo(B); 1-1 / A e B com a chave estrangeira sendo definida no modelo de origem ( A)
A.hasMany(B); 1-N / A e B, com a chave estrangeira sendo definida no modelo de destino ( B).
*/

module.exports = posts;