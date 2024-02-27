import { CreateUserRequest, UpdateUserRequest } from '@/models/user';
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  withCredentials: true,
})

export class UserService {
  async getAll() {
    const users = await axiosInstance.get('/users')
    return users;
  }

  async getById(id: number) {
    const user = await axiosInstance.get(`/users/${id}`)
    return user;
  }

  async create(user: CreateUserRequest) {
    const createdUser = await axiosInstance.post('/users', user)
    return createdUser;
  }

  async update(user: UpdateUserRequest) {
    const updatedUser = await axiosInstance.put('/users', user)
    return updatedUser;
  }

  async delete(id: number) {
    const deletedUser = await axiosInstance.delete(`/users/${id}`)
    return deletedUser;
  }
}
