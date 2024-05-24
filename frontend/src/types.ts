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
  filePath: string;  
  createdAt: string;
  updatedAt: string;
}
