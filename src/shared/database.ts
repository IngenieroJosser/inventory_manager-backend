import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/inventory_manager';
    await mongoose.connect(uri, {
      // Opciones modernas de conexión
      dbName: 'inventory_manager', // Si deseas especificar el nombre de la base de datos
    });
    console.log('🚀 Database connected successfully!');
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
    process.exit(1); // Salir del proceso si la conexión falla
  }
};

export default connectDatabase;
