import axios from "axios"
import { logout } from "../shared/hooks/useLogout"

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

export const getFollowedChannels = async () => {
  try {
    return await apiClient.get("/channels/followed")
  } catch (e) {
    checkResponseStatus(e)
    return {
      error: true,
      e: e
    }
  }
}

export const getChannelDetails = async (channelId) => {
  try {
    return await apiClient.get(`/channels/${channelId}`)
  } catch (e) {
    return {
      error: true,
      e: e
    }
  }
}

export const followChannel = async (channelId) => {
  try {
    return await apiClient.post('/channels/follow', { channelId })
  } catch (err) {
    return {
      error: true,
      err: err,
    }
  }
}

const checkResponseStatus = (e) => {
  const responseStatus = e?.response?.status

  if (responseStatus) {
    (responseStatus === 401 || responseStatus === 403) && logout()
  }
}
