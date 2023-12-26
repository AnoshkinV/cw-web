import axios from 'axios'
import { IResponse, IUser, IUserInfo } from '../types/userTypes'


export const login = async (email: string, password: string): Promise<IResponse> => {
    try {
       const { data } = await axios.post('http://localhost:8000/user/login', { email, password })
       localStorage.setItem('token', data.token)
       return data
    } catch (error) {
       console.log(error)
       throw error
    }
 }
 
 export const registration = async (username: string, email: string, password: string): Promise<IResponse> => {
    // eslint-disable-next-line no-useless-catch
    try {
       const { data } = await axios.post('http://localhost:8000/user/registration', {username, email, password })
       localStorage.setItem('token', data.token)
       return data
    } catch (error) {
       throw error
    }
 }


 export const getUsers = async (): Promise<IUser[]> => {
         const { data } = await axios.get('http://localhost:8000/user')
         return data
 }


 export const getUserById = async (userId: string): Promise<IUserInfo> => {
   const {data} = await axios.get(`http://localhost:8000/user/info/${userId}`)
   return data
 }