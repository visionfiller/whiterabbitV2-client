export const getCustomerById = (id) => {
 return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/users/${id}?isStaff=false&_embed=favorites`)
        .then(response => response.json())
    }
    export const updateCustomer =(userObject) => {
        return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/users/${userObject.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
          })
          .then(response => response.json())
    }
    export const getMessagesById = (id) => {
        return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/messages?receiverUserId=${id}`)
               .then(response => response.json())
           }
    export const CreateNewMessage =(messageObject) => {
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
