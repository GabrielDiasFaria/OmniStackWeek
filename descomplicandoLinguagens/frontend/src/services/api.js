import axios from 'axios'

import baseUrl from '../utils/globalConfig'

const api = axios.create({
    baseURL: baseUrl.baseURL
})

export default api