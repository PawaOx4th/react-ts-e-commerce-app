import axios from "axios"

// @todo work

// @todo ABC
const clientApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export default clientApi
