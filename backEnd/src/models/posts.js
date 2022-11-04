const Sequelize = require('sequelize');
const db = require('../connection/db');
const usuario = require('./user')

const posts = db.define('posts', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true  
    },
    description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true    
    }
},{
    timestamps: false
  })

posts.belongsTo(usuario,{
    constraint: true,
    foreignKey: 'postUsuarioId'
});  
usuario.hasMany(posts,{
    constraint: true,
    foreignKey: 'postUsuarioId'
});


/*
A.hasOne(B); 1-1 / chave estrangeira sendo definida no modelo de destino ( B)
A.belongsTo(B); 1-1 / A e B com a chave estrangeira sendo definida no modelo de origem ( A)
A.hasMany(B); 1-N / A e B, com a chave estrangeira sendo definida no modelo de destino ( B).
A.BelongsToMany(B); ?
*/

module.exports = posts;