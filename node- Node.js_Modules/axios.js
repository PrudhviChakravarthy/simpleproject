const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        console.log('GET Request Response:');
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error making GET request:', error);
    });
