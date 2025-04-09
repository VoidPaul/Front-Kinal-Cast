import toast from "react-hot-toast"
import { followChannel as followChannelRequest } from "../../services"

export const useFollowChannel = () => {
  const followChannel = async (channelId, onSuccess) => {
    const response = await followChannelRequest(channelId)

    if (response.error) {
      return toast.error(response.e?.response?.data | "Existió un error al seguir el canal")
    }

    toast.success("Ahora sigues este canal")
    onSuccess(true)
  }

  return {
    followChannel
  }
}
