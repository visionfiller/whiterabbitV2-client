import { getToken } from "../TokenManager"

export const getUserById= (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/users/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}