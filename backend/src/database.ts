import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres://lumi:lumi@localhost:5432/lumi', {
  dialect: 'postgres',
  logging: false
});

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();  // Sincroniza o modelo com o banco de dados
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
