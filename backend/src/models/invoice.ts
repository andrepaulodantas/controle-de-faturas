import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Invoice extends Model {
  public id!: number;
  public clientNumber!: string;
  public referenceMonth!: string;
  public energyConsumption!: number;
  public energyCost!: number;
  public sceeeConsumption!: number;
  public sceeeCost!: number;
  public compensatedQuantity!: number;
  public compensatedEnergy!: number;
  public publicLightingContribution!: number;
  public filePath!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Invoice.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clientNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  referenceMonth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  energyConsumption: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  energyCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sceeeConsumption: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sceeeCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  compensatedQuantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  compensatedEnergy: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  publicLightingContribution: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  filePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Invoice',
  timestamps: true,
});

export default Invoice;

