const fetch = require('node-fetch');

const url = 'https://api.coincap.io/v2/assets';

let resposta;

const fetchCoin = async () => {
    try {
        const response = await fetch(`${url}`);
        const responseJson = await response.json();
        return responseJson.data;
        
    } catch (error) {
        return error;    
    }
}

fetchCoin().then((data) => console.log(data));