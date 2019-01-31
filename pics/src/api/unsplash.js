import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID bd9017d0afb5406c379b46f708887fdcb2fb83e33d092efcdbf9bb139e5a416c'
    }
});