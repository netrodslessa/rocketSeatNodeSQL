// Cria classe para alimentar a tabela
const {Model, DataTypes} = require('sequelize');

class User extends Model{
  static init(sequelize) {
    super.init({
      // campos da tabela:
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }
};

module.exports = User;