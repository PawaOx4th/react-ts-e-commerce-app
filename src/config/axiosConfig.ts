import axios from "axios"

// @todo #1 Implement responsive layout and navigation
const clientApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export default clientApi
