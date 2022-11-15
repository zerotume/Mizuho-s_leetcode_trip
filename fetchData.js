async function fetchData(url) {
    const https = require('https');
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            response.on('data', (stream) => {
                data += stream;
            })

            response.on('end', () => {
                const resolvedData = JSON.parse(data);
                resolve(data);
            })
        }).on('error', (err) => {
            reject(err);
        })
    });
}

async function showData() {
    const data = await fetchData('https://jsonmock.hackerrank.com/api/movies?Year=2000');
    console.log(data);
}

showData();
