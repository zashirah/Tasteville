import api from "./api-config"

export const getAllFoods = async () => {
  const resp = await api.get("/foods")
  return resp.data
}

export const getOneFood = async (id) => {
  const resp = await api.get(`/foods/${id}`)
  return resp.data
}

export const putFood = async (id, updatedData) => {
  const resp = await api.put(`/foods/${id}`, { food: updatedData })
  return resp.data
}
