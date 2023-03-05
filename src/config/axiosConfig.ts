import axios from "axios"

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

axiosApiInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

const client = axiosApiInstance
export default client
