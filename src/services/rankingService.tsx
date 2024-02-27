import { CreateRankingRequest, UpdateRankingRequest } from '@/models/ranking';
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  withCredentials: true,
})

export class RankingService {
  async getAll() {
    const rankings = await axiosInstance.get('/rankings')
    return rankings;
  }

  async getById(id: number) {
    const ranking = await axiosInstance.get(`/rankings/${id}`)
    return ranking;
  }

  async create(Ranking: CreateRankingRequest) {
    const createdRanking = await axiosInstance.post('/rankings', Ranking)
    return createdRanking;
  }

  async update(Ranking: UpdateRankingRequest) {
    const updatedRanking = await axiosInstance.put('/rankings', Ranking)
    return updatedRanking;
  }

  async delete(id: number) {
    const deletedRanking = await axiosInstance.delete(`/rankings/${id}`)
    return deletedRanking;
  }
}
