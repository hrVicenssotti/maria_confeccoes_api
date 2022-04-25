const Sequelize = require('sequelize')
const instance = require('../Instance')

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: true
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: true
    },
    observacoes: {
        type: Sequelize.STRING,
        allowNull: true
    }
}
const opcoes = {
    freezeTableName: true,
    tableName: 'clientes',
    timestamps: true
}

module.exports = instance.define('Clientes', colunas, opcoes)