const Sequelize = require('sequelize');
const db = require('../connection/db');

const posts = db.define('posts', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true  
    },
    rank: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
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
        allowNull: false
    }
});

module.exports = Usuario;