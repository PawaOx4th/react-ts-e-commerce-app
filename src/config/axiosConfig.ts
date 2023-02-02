import axios from "axios"

// @todo #2 test 0pdd.
const clientApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export default clientApi
