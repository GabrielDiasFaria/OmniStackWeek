import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://descomplicandolinguagens.com.br:21262'
    baseURL: 'http://localhost:21262'
})

export default api