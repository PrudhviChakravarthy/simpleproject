const axios = require('axios');

axios.get('https://mxplayer.in')
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
