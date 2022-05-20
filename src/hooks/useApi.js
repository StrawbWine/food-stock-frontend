import { useState, useEffect } from "react"
import axios from "axios"

const useApi = url => {
  const [data, setData] = useState(null)

  const getFromApi = async () => {
    try {      
      const result = await axios.get(url)      
      setData(result.data)
    } catch (error) {
      console.error(error);
    }
  }

  const postToApi = async requestBody => {
    await axios.post(url, requestBody)
  }

  const deleteFromApi = async id => {
    await axios.delete(`${url}/${id}`)
  }

  useEffect(() => {
    getFromApi()
  }, [])

  return { data, getFromApi, postToApi, deleteFromApi }
}

export default useApi