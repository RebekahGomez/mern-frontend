import api from './apiConfig.js'

export const getGames = async () => {
  try {
    const response = await api.get('/games')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getGame = async (id) => {
  try {
    const response = await api.get(`/games/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createGame = async (game) => {
  try {
    const response = await api.post('/games', game)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateGame = async (id, game) => {
  try {
    const response = await api.put(`/games/${id}`, game)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteGame = async (id) => {
  try {
    const response = await api.delete(`/games/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}