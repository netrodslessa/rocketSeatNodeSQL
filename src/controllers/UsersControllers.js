const User = require('../models/User');

module.exports = {
  async index(req, res){
    const users = await User.findAll();
    return res.json(users)
    // esse listas os dados do banco
  },
  async store(req, res){
    const {name, email} = req.body;

    const user = await User.create({name, email});

    return res.json(user);
    // esse insere registro
  }
};