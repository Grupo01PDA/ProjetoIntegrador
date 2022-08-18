const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../connection/db');

const posts = db.define('posts', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true  
    },
    documents: {
        type: Sequelize.DataTypes.JSON,
        allowNull: true
    },
    description: {
        type: Sequelize.DataTypes.TEXT('medium'),
        allowNull: true
    },
    qtdLike: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: true
    },
    qtdComentario: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true,
        autoIncrement: true
    },
    qtdCompartilhamento: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true,
        autoIncrement: true
    }
})

module.exports = posts;