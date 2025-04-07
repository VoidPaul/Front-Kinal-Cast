import { useState, useEffect, useCallback } from "react"
import toast from "react-hot-toast"
import { getChannels as getChannelsRequest, getFollowedChannels as getFollowedChannelsRequest } from "../../services"

export const useChannels = () => {
  const [channels, setChannels] = useState([])
  const [followedChannels, setFollowedChannels] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const getChannels = useCallback(async (isLogged = false) => {
    const channelsData = await getChannelsRequest()

    if (channelsData.error) {
      toast.error(channelsData.err?.response?.data || "Error al obtener los canales")
      setIsFetching(false)
      return
    }

    setChannels(channelsData.data.channels)

    if (isLogged) {
      const followedChannelsData = await getFollowedChannelsRequest()

      if (followedChannelsData.error) {
        toast.error(followedChannelsData.error?.response?.data || "Error al obtener los canales seguidos.")
      } else {
        setFollowedChannels(channelsData.data.channels.filter((channel) => followedChannelsData.data.followedChannels.includes(channel.id)))
      }
    }
  }, [])

  useEffect(() => {
    getChannels()
  }, [getChannels])

  return {
    getChannels,
    isFetching,
    allChannels: channels,
    followedChannels
  }
}
