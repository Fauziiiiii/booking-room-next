import { baseApi } from "@/lib/api/endpoint";
import { Login } from "../dto/login-dto";

export async function loginAction (newData: Login): Promise<Login> {
    try {
        const response = await baseApi.post('/api/auth/login', newData)
        return response.data.data.token;
    } catch (err) {
        console.error("Login error: ", err)
        throw new Error('failed to loginn cukkk')
    }
}