import api from "./apiConfig"

export const createMessage = async(form) => {
  try {
    const res = await api.post('/messages', {message: form})
    return res.data
  } catch {
    return false
  }
}

export const getAllMessages = async() => {
  try {
    const res = await api.get('/messages')
    return res.data
  } catch {
    return false
  }
}

export const deleteMessage = async(id) => {
  try {
    const res = await api.delete(`/messages/${id}`)
    return res.data
  } catch {
    return false
  }
}