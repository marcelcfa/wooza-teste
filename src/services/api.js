const API_URL = "https://marcelcfa.github.io/wooza-teste/public/db.json"
const parseFetchResponse = (res) => {
  if (!res.ok) {
    throw new Error("Ops.. something went wrong")
  } else {
    return res.json()
  }
}
export const getUsers = () => fetch(API_URL).then(parseFetchResponse)

export default {
  getUsers
}