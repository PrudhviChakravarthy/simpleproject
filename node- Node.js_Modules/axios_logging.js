const axios = require('axios');

const requestInterceptor = axios.interceptors.request.use((config) => {
    console.log('Request sent:', config);
    return config;
});

const responseInterceptor = axios.interceptors.response.use((response) => {
    console.log('Response received:', response);
    return response;
});

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        console.log('GET Request Response:');
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error making GET request:', error);
    })
    .finally(() => {
        // Remove interceptors when done
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
    });
