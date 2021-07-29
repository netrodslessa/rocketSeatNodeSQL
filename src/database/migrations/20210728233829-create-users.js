'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', { 
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
     },
     name: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     email: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    });
  },

  down: async (queryInterface, Sequelize) => {
 await queryInterface.dropTable('users');
  }
};

// yarn sequelize db:migrate -> executa o código da migration
// as migration vão criar as tabelas, por exemplo
// o up cria e o down desfaz caso dê algum erro
// yarn sequelize db:migrate:undo -> desfaz a última vez que criou o db:migrate
  // isso vai fazer com que apague o que foi feito, assim, posso ediar o arquivo
  // e gerar o migrate novamente.
  // não fazer isso em produção, pode ferrar tudo.
