import { useState } from "react"
import toast from "react-hot-toast"
import { getChannelDetails as getChannelDetailsRequest } from "../../services"

const initialChannelDetails = {
  id: "",
  title: "",
  description: "",
  username: "",
  isOnline: false,
  streamUrl: "",
}

export const useChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(initialChannelDetails)

  const getChannelDetails = async (id) => {
    try {
      const response = await getChannelDetailsRequest(id)

      if (response.error) {
        return toast.error(response.e?.response?.data || "Error al obtener la información del canal.")
      }

      setChannelDetails(response.data)

    } catch (err) {
      toast.error("No se pudo obtener la información del canal", err)
    }
  }

  return {
    channelDetails,
    isFetching: channelDetails.id === "",
    getChannelDetails
  }
}
