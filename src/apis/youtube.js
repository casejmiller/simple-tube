import axios from 'axios';

const KEY = 'AIzaSyCV7sMpO6-SSpH3Uycq5X3UJoe1x9vMpPQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

