import { getToken } from "../TokenManager"

export const getCustomer = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/customers/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }}).then(response => response.json())
    }
export const getCustomers = () => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/customers`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
            }}).then(response => response.json())}
            
export const getFavorites=()=>{
    return <></>
}


export const unFavorite = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/varietalregions/${id}/unfavorite`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
       

       
}
export const Favorite = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/varietalregions/${id}/favorite`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())

       
}
export const getMatchedWineBottlesbyVarietalRegionId = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/winebottles?varietal_region=${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }}).then(response => response.json())
}


