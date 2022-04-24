const Sequelize = require('sequelize')
const instance = require('../Instance')

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: true
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
    empresa: {
        type: Sequelize.STRING,
        allowNull: true
    },
    salario: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    data_contratacao: {
        type: Sequelize.DATE,
        allowNull: true
    },
    endereco_empresa: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cidade_empresa: {
        type: Sequelize.STRING,
        allowNull: true
    },
    estado_empresa: {
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