import { getToken } from "../TokenManager"

export const getUsers = () => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/users`, {
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}

export const getUser = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/users/${id}`, {
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}



export const updateUser = (id, userObject) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/users/${id}`, {
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
    return fetch(`https://whiterabbit-server.herokuapp.com/customers/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    })
       
}

export const CreateNewMessage = (messageObject) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/customers/${messageObject.receiver}/message`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObject)
    })
        
}
export const deleteMessage = (messageObject) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/customers/${messageObject.receiver}/deletemessage`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObject)
    })

}
