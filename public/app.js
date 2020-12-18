const testApi = async () => {

    const fetch = require("node-fetch");
    let urlOmbd = 'http://www.omdbapi.com/?i=tt3896198&apikey=2258762&t=harry&type=movie';
    try {
        const result = await fetch(urlOmbd, {method: 'GET'});
        const data = await result.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

testApi();
