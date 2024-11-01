import axios from "axios";

const BASE_URL = "http://localhost:5050"

export const baseApi = axios.create({
    baseURL: BASE_URL
})