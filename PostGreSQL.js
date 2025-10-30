const { Sequelize} = require('sequelize');

// Configure database connection
const conn = new Sequelize('sequelizenode_2025', 'postgres', '456alves', {
  host: '127.0.0.1',
  dialect: 'postgres',
  port: '5432'
});

async function testConnection() {

  try {
    await conn.authenticate();
    console.log('Connection has been established Successfully!!!!!!');

  } catch (error) {

    console.error('Unable to connect to the database:', error);
    
  }
}

testConnection();


module.exports = conn;