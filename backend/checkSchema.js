const { sequelize } = require('./models'); // Adjust the path if needed

async function checkTableSchema() {
  try {
    const tableDescription = await sequelize.getQueryInterface().describeTable('Invoices');
    console.log(tableDescription);
  } catch (error) {
    console.error('Error describing table:', error);
  } finally {
    await sequelize.close();
  }
}

checkTableSchema();
