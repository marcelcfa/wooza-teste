const API_URL = "https://raw.githubusercontent.com/marcelcfa/wooza-teste/master/public/db.json"
const parseFetchResponse = (res) => {
  if (!res.ok) {
    throw new Error("Ops.. something went wrong")
  } else {
    return res.json()
  }
}
export const getUsers = () => fetch(`${API_URL}/users`).then(parseFetchResponse)

export default {
  getUsers
}