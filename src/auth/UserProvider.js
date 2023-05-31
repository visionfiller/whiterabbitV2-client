export const createUser = ( user ) => {
    return fetch("https://whiterabbit-server.herokuapp.com/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}
export const loginUser = (user) => {
    return fetch("https://whiterabbit-server.herokuapp.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}
export const getUserByEmailId = (user) => {
    return fetch(`https://whiterabbit-server.herokuapp.com/users?email=${user.email}`)
        .then(res => res.json())
}

