
import axios from "axios"

export const api = axios.create({
    baseURL:"http://213.199.34.103:3003/api"
})


api.interceptors.request.use((config)=>{
    config.headers.Authorization = "Bearer "+localStorage.getItem("token")
    return config;
})