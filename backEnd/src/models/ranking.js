const Sequelize = require('sequelize');
const db = require('../connection/db');
const Usuario = require('./user');

const Ranking = db.define('rankings', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    pontosMin: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

Ranking.hasMany(Usuario, {
    constraint: true,
    foreignKey: "rankingIdUsuario"
});
Usuario.belongsTo(Ranking,{
    constaint: true,
    foreignKey: "rankingIdUsuario"
})

module.exports = Ranking;

// 1 parametro NOME DA TABELA
// 2 parametro sao as colunas que devem ter na
// tabela
