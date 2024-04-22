import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.jikan.moe/v4/anime/',
})

export default http