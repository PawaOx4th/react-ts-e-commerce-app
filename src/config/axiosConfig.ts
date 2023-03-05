import axios from "axios"
import * as dayjs from "dayjs"
import jwtDecode from "jwt-decode"

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

axiosApiInstance.interceptors.request.use(
  (config) => {
    const secret = localStorage.getItem("secret")
    const token = JSON.parse(secret ?? "") as { state?: { jwt?: string } }
    if (secret && token?.state?.jwt) {
      const jwtData = jwtDecode<{ id: number; iat: number; exp: number }>(
        token?.state?.jwt,
      )

      // TODO:  Check is expired.
      const isExpired = dayjs.unix(jwtData.exp).diff(dayjs()) < 1

      if (!isExpired) {
        config.headers["Authorization"] = `Bearer ${token.state.jwt}`
        return config
      }

      return config
    } else {
    }

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
