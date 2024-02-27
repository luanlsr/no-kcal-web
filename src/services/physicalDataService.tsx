import { CreatePhysicalDataRequest, UpdatePhysicalDataRequest } from '@/models/physicalData';
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  withCredentials: true,
})

export class PhysicalDataService {
  async getAll() {
    const PhysicalDatas = await axiosInstance.get('/physical-data')
    return PhysicalDatas;
  }

  async getById(id: number) {
    const physicalData = await axiosInstance.get(`/physical-data/${id}`)
    return physicalData;
  }

  async create(PhysicalData: CreatePhysicalDataRequest) {
    const createdPhysicalData = await axiosInstance.post('/physical-data', PhysicalData)
    return createdPhysicalData;
  }

  async update(PhysicalData: UpdatePhysicalDataRequest) {
    const updatedPhysicalData = await axiosInstance.put('/physical-data', PhysicalData)
    return updatedPhysicalData;
  }

  async delete(id: number) {
    const deletedPhysicalData = await axiosInstance.delete(`/physical-data/${id}`)
    return deletedPhysicalData;
  }
}
