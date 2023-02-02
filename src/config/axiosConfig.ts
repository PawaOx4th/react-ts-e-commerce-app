import axios from "axios"

// @todo #4 test
const clientApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export default clientApi
