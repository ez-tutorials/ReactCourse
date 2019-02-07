import axios from 'axios';

const KEY ='AIzaSyCHADNyeihRi9zUdpZLPgxV9p0yyMcjzoc';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY,
        }
    }
);