const api = 'http://localhost:3001';

export const createNote = ({ title, content, date, color = 'white' }) => {
    return fetch(`${api}/notes`, {
        method: 'POST',
        body: JSON.stringify({ title, content, date, color }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status === 201)
            return true;
        else
            return false;
    }).catch(err => {
        console.error(err);
        return false;
    })
}

export const getAllNotes = (searchParam) => {
    return fetch(`${api}/notes?term=${searchParam}`)
        .then(res => {
            if (res.status === 200)
                return res.json();
            else
                throw Error('');
        }).catch(err => {
            console.error(err);
            return false;
        })
}


export const deleteNote = (id) => {
    return fetch(`${api}/notes/${id}`, {
        method: 'DELETE',
    }).then(res => {
        if (res.status === 200)
            return true;
        else
            return false;
    }).catch(err => {
        console.error(err);
        return false;
    })
}

export const updateNote = ({ id, title, content, date }) => {
    return fetch(`${api}/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, date }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status === 200)
            return true;
        else
            return false;
    }).catch(err => {
        console.error(err);
        return false;
    })
}