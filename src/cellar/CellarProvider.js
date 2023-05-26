import { getToken } from "../TokenManager"

export const getCustomer = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/customers/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }}).then(response => response.json())
    }
export const getCustomers = () => {
    let token = getToken()
    return fetch(`http://localhost:8000/customers`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
            }}).then(response => response.json())}
            
export const getFavorites=()=>{
    return <></>
}


export const unFavorite = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/varietalregions/${id}/unfavorite`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
       

       
}
export const Favorite = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/varietalregions/${id}/favorite`, {
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
    return fetch(`http://localhost:8000/winebottles?varietal_region=${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }}).then(response => response.json())
}


