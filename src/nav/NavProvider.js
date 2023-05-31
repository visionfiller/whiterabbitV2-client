import { getToken } from "../TokenManager"

export const getUserById= (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/users/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}