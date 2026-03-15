import axios from 'axios'

// in production there is no localhost, so we have to make BASE_URL dynamic
const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:3000/api/v1' : '/api/v1'
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export default api
