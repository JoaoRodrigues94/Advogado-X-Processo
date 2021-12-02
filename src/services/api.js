import axios from 'axios';

const url = axios.create({
    baseURL: 'http://localhost:3012',
})

export default url;

