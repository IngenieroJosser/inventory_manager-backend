import mongoose from 'mongoose';
import config from './config';

const connectDatabase = async (): Promise<void> => {
  try {
    const { host, db, user, pass, port } = config.mongodb;

    // Construir la URI de conexión
    const authPart = user && pass ? `${user}:${pass}@` : '';
    const uri = `mongodb://${authPart}${host}:${port}/${db}`;

    await mongoose.connect(uri, {
      dbName: db, // Nombre explícito de la base de datos
    });

    console.log('🚀 Database connected successfully!');
    console.log(`🌐 MongoDB URI: ${uri}`);
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
    process.exit(1); // Salir del proceso si la conexión falla
  }
};

export default connectDatabase;
