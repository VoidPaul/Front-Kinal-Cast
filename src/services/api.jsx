import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3001/kinalCast/v2",
  timeout: 5000,
  httpsAgent: false,
})

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user")

    if (userDetails) {
      const token = JSON.parse(userDetails).token
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data)
  } catch (err) {
    return {
      error: true,
      err,
    }
  }
}

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data)
  } catch (err) {
    return {
      error: true,
      err,
    }
  }
}

export const getChannels = async () => {
  try {
    return await apiClient.get("/channels")
  } catch (err) {
    return {
      error: true,
      err: err,
    }
  }
}
