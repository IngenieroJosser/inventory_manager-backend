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

    console.log('🚀 Base de datos conectada con exito!');
    console.log(`🌐 MongoDB URI: ${uri}`);
  } catch (error) {
    console.error('❌ Error conectadndo a la base de datos:', error);
    process.exit(1); // Salir del proceso si la conexión falla
  }
};

export default connectDatabase;
