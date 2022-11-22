import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://m3individual.onrender.com/'
})

export default Api;