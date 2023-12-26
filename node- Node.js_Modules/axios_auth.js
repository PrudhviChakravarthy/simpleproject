const axios = require('axios');

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Bearer mytoken';

axios.get('/posts/1')
    .then((response) => {
        console.log('GET Request Response:');
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error making GET request:', error);
    });
