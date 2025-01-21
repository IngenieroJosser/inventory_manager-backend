import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  mongodb: {
    host: process.env.MONGO_HOST || 'localhost',
    db: process.env.MONGO_DB || 'inventory_manager',
    user: process.env.MONGO_USER || '',
    pass: process.env.MONGO_PASS || '',
    port: process.env.MONGO_PORT || 27017,
  },
};

export default config;
