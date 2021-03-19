const baseUrl= 'https://api.tfl.gov.uk'

export function apiGet(url) {
    return fetch(`${baseUrl}${url}`)
                .then(data => data.json());
}
