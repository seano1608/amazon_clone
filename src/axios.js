import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e3a8b/us-central1/api' //API (Cloud function URL)
})

export default instance;