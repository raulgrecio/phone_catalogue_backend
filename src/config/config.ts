import * as dotenv from 'dotenv'
dotenv.config()

export default {
  APP: process.env.APP || 'development',
  PORT: process.env.PORT || '3000',

  DB_DIALECT: process.env.DB_DIALECT || 'mongo',
  DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017/phone_db',
  DB_NAME: process.env.DB_NAME || 'phone_db',
  DB_PASSWORD: process.env.DB_PASSWORD || 'db-phone',
  DB_PORT: process.env.DB_PORT || '27017',
  DB_USER: process.env.DB_USER || 'root',

  DB_RESTORE: process.env.DB_RESTORE || 'true'
}
