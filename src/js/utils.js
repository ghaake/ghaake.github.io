export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (data.message) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}   