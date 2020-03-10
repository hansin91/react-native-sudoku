import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sugoku.herokuapp.com'
})

export default instance