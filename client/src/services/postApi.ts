import axios from "axios";
import { IPost } from "../types/userTypes";



export const postCreate = async (userId: number, postText: string) => {
    const {data} = await axios.post("http://localhost:8000/post/create", {userId, postText})
    return data
}


export const getPosts = async (): Promise<IPost[]> => {
    const {data} = await axios.get('http://localhost:8000/post')
    console.log(data)
    return data
}