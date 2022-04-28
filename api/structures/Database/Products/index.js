const Sequelize = require('sequelize')
const instance = require('../Instance')

const colunas = {
    codigo_produto: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    codigo_barras: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    valor_compra: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    porcentagem: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    valor_venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    observacoes: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true
}

module.exports = instance.define('Produtos', colunas, opcoes)