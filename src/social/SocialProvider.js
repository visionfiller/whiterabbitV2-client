import { getToken } from "../TokenManager"

export const getUsers = () => {
    let token = getToken()
    return fetch(`http://localhost:8000/users`, {
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}

export const getUser = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/users/${id}`, {
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}



export const updateUser = (id, userObject) => {
    let token = getToken()
    return fetch(`http://localhost:8000/users/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    })
       
}
export const updateCustomer = (id, userObject) => {
    let token = getToken()
    return fetch(`http://localhost:8000/customers/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    })
       
}
export const getMessagesById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/messages?receiverUserId=${id}`)
        .then(response => response.json())
}
export const CreateNewMessage = (messageObject) => {
    return fetch(` https://white-rabbit-api-k3hmh.ondigitalocean.app/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObject)
    })
        .then(response => response.json())
}
export const deleteMessage = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/messages/${id}`, {
        method: "DELETE"
    })

}
