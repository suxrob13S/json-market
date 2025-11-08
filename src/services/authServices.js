import { api } from "./apiServices";

export async function login(data) {
    try {
        const res = await api.post("/auth/login", data)
        return res.data
    } catch (err) {
        return err.response.data
    }


}
export async function signup(data) {
    try {
        const res = await api.post("/auth/register",data)
        return res.data
    } catch (err) {
        return err.response.data
    }


}
export async function profile() {
    try {
        const res = await api.get("/profile")
        return res.data
    } catch (err) {
        return err.response.data
    }


}