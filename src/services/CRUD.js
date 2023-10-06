const api = 'http://localhost:3001';

export const createNote = ({ title, content, date }) => {
    return fetch(`${api}/notes`, {
        method: 'POST',
        body: JSON.stringify({ title, content, date }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status === 201)
            return true;
    }).catch(err => {
        console.error(err);
    })
}