import { BASE_URL } from "../data/api"

export const getConstructors = async (): Promise<Response> => {
  return await fetch(`${BASE_URL}/constructors`)
}