import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '954c728eafe94b08a5501c76236165d6'
    }
})