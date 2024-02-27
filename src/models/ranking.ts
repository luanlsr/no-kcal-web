export interface RankingEntity {
  id: string;
  userId: string;
  physicalId: string;
  date: Date;
  monthlyPoints: number;
  totalPoints: number;
  name: string;
  lastName: string;
  description: string;
  image: string;
}

export interface CreateRankingRequest {
  userId: string;
  physicalId: string;
  date: Date;
  monthlyPoints: number;
  totalPoints: number;
  name: string;
  lastName: string;
  description: string;
  image: string;
}

export interface UpdateRankingRequest {
  id: string;
  userId: string;
  physicalId: string;
  date: Date;
  monthlyPoints: number;
  totalPoints: number;
  name: string;
  lastName: string;
  description: string;
  image: string;
}

