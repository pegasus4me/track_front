export function setTolocalStorage(secret, token) {
    return window.localStorage.setItem(secret, token);
}

export function setTolocalStorageJSON(secret, token){
    return window.localStorage.setItem(secret, JSON.stringify(token));
}