import { PhysicalData } from "./physicalData";
import { RankingEntity } from "./ranking";
import { User } from "./user";

// export interface RankingDetails {
//     id: string;
//     user: User[];
//     physicalData: PhysicalData;
//     ranking: Ranking;
// }

export interface RankingDetails {
  users: [{
    _id: string;
    name: string;
    lastname: string;
    birthday: Date;
    email: string;
    phone: string;
    sector: string;
    photo: string;
    physicalData: {
      _id: string;
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
    };
    ranking: {
      _id: string;
      userId: string;
      date: Date;
      monthlyPoints: number;
      totalPoints: number;
      name: string;
      lastName: string;
      description: string;
      image: string;
    };
  }];
}
