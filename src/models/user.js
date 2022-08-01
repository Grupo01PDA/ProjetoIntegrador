const Sequelize = require('sequelize');
const db = require('../connection/db');
const Ranking = require('./ranking');

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
        type: Sequelize.DataTypes.STRING,
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
    }
});

Usuario.belongsTo(Ranking, {
    foreignKey: "idRanking"
});

Ranking.hasMany(Usuario, {
    foreignKey: "idUsuario"
})

module.exports = Usuario;

// 1 parametro NOME DA TABELA
// 2 parametro sao as colunas que devem ter na
// tabela