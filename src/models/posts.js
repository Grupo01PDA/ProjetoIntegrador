const Sequelize = require('sequelize');
const db = require('../connection/db');

const posts = db.define('posts', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true  
    }

module.exports = posts;