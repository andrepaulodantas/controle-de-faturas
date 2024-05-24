// src/types.ts

export interface DataPoint {
  name: string;
  value: number;
}

export interface Invoice {
  id: number;
  clientNumber: string;
  referenceMonth: string;
  energyConsumption: number;
  energyCost: number;
  sceeeConsumption: number;
  sceeeCost: number;
  compensatedQuantity: number;
  compensatedEnergy: number;
  publicLightingContribution: number;
  createdAt: string;
  updatedAt: string;
}
