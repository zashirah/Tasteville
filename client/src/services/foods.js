import api from "./api-config"

export const getAllFoods = async () => {
  const resp = await api.get("/foods")
  return resp.data
}
