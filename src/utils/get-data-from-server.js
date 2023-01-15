function getResponseData(res){
    return res.ok ? res.json() : res.json.then((err) => Promise.reject(err));
}

export function getDataFromServer(url) {
    return fetch(url)
        .then((res) => {
            return getResponseData(res);
        })
}
