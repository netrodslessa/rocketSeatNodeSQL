module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '43690',
  database: 'sqlnode',
  define: {
    timestamps: true,
    // armasena a data e atualiza a última vez que foi criado registro
    underscored: true, // snaque case 
  },

};