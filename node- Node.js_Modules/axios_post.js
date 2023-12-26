const axios = require('axios');

const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    .then((response) => {
        console.log('POST Request Response:');
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error making POST request:', error);
    });
