export interface PhysicalData {
    id: string;
    userId: string;
    date: Date;
    peso: number;
    altura: number;
    IMC: number;
    gorduraPercentual: number;
    pesoGordura: number;
    percentualMassaMuscularEsquelatica: number;
    registroMassaMuscular: number;
    pesoMassaMuscular: number;
    aguaPercentual: number;
    pesoAgua: number;
    gorduraVisceral: number;
    ossos: number;
    metabolismo: number;
    proteinaPercentual: number;
    obesidadePercentual: number;
    idadeReal: number;
    idadeCorporal: number;
    LBM: number;
}

export interface CreatePhysicalDataRequest {
    userId: string;
    date: Date;
    peso: number;
    altura: number;
    IMC: number;
    gorduraPercentual: number;
    pesoGordura: number;
    percentualMassaMuscularEsquelatica: number;
    registroMassaMuscular: number;
    pesoMassaMuscular: number;
    aguaPercentual: number;
    pesoAgua: number;
    gorduraVisceral: number;
    ossos: number;
    metabolismo: number;
    proteinaPercentual: number;
    obesidadePercentual: number;
    idadeReal: number;
    idadeCorporal: number;
    LBM: number;
}

export interface UpdatePhysicalDataRequest {
    id: string;
    userId: string;
    date: Date;
    peso: number;
    altura: number;
    IMC: number;
    gorduraPercentual: number;
    pesoGordura: number;
    percentualMassaMuscularEsquelatica: number;
    registroMassaMuscular: number;
    pesoMassaMuscular: number;
    aguaPercentual: number;
    pesoAgua: number;
    gorduraVisceral: number;
    ossos: number;
    metabolismo: number;
    proteinaPercentual: number;
    obesidadePercentual: number;
    idadeReal: number;
    idadeCorporal: number;
    LBM: number;
}
