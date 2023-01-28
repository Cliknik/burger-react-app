function getResponseData(res){
    return res.ok ? res.json() : res.json.then((err) => Promise.reject(err));
}

export function getDataFromServer(url) {
    return fetch(url)
        .then((res) => {
            return getResponseData(res);
        })
}

export function sendOrderDetails(url, details) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'ingredients': details})
    })
        .then((res) => {
            return res.json()
        })
}
