export interface Invoice {
  id: number;
  clientNumber: string;
  referenceMonth: string;
  energyConsumption: number;
  energyCost: number;
  sceeeConsumption: number;
  sceeeCost: number;
  compensatedEnergy: number;
  publicLightingContribution: number;
  createdAt: string;
  updatedAt: string;
}
