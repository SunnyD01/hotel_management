const axios = require('axios');
axios
    .get('http://localhost:8000/hotel')
    .then(function (response) {
        console.log(response);
        return response;
    })
    .catch(function (error) {
        return error;
    });