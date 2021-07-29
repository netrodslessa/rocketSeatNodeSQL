'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', { 
     id: {
       type: Sequelize.INTEGER,
       prymaryKey: true,
       autoIncremental: true,
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
     }
    });
  },

  down: async (queryInterface, Sequelize) => {
 await queryInterface.dropTable('users');
  }
};

// yarn sequelize db:migrate -> executa o código da migrate
