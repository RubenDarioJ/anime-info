import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8004/api/auth/',
})

export default http