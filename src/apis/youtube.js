import axios from 'axios';

const KEY = "AIzaSyDDV_e4C9aBUibohmV16T6gomzVi1rRF3A";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})