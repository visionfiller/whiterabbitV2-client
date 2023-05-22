export const getToken=() => {
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    return rabbitUserObject.auth_token
}
