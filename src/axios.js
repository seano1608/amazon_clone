import axios from 'axios'

const instance = axios.create({
    baseURL = '...' //API (Cloud function URL)
})

export default instance;