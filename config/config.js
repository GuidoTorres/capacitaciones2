require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3005,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET
  //modificacion de prueba
  //modificacion para prueba 2
  
}

module.exports = { config };