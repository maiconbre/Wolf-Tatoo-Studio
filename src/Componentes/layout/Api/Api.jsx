import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://json-server-onqo.onrender.com/'
})

export default Api;