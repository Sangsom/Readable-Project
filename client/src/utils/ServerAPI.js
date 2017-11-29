const URL = 'http://localhost:3001'

// Setting up Headers
const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Authorization', 'authorization-key');
headers.append('Content-Type', 'application/json');

export const getCategories = () => {
    return fetch(`${URL}/categories`, { headers }).then(res => res.json())
}