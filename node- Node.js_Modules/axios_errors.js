const axios = require('axios');

function makeRequest() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/123')
        .catch((error) => {
            console.error('Error making request:', error.message);
            return new Promise((resolve) => setTimeout(resolve, 2000)).then(makeRequest);
        });
}

makeRequest()
    .then((response) => {
        console.log('Successful response:');
        console.log(response.data);
    });
