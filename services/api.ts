import axios from 'axios'

export const motorsApi = axios.create({
  baseURL: 'https://motors-ecommerce-api.herokuapp.com',
})
