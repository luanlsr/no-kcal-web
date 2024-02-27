import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  withCredentials: true,
})

export class RankingDetailsService {
  async getAll() {
    const rankingDetails = await axiosInstance.get('/ranking-details')
    return rankingDetails;
  }
}
