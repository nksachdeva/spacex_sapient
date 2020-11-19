import axios from 'axios';

export default axios.create({
    baseURL:'https://api.spaceXdata.com/v3/launches?limit=100'
})