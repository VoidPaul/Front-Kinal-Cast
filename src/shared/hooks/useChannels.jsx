import { useState, useEffect, useCallback } from "react"
import toast from "react-hot-toast"
import { getChannels as getChannelsRequest } from "../../services"

export const useChannels = () => {
  const [channels, setChannels] = useState([])

  const getChannels = useCallback(async () => {
    const channelsData = await getChannelsRequest()

    if (channelsData.error) {
      return toast.error(channelsData.e?.response?.data || "Error al obtener los canales")
    }

    setChannels(channelsData.data.channels)
  }, [])

  useEffect(() => {
    getChannels()
  }, [getChannels])

  return {
    getChannels,
    isFetching: channels === null,
    allChannels: channels,
  }
}
