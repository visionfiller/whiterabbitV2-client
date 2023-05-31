import { getToken } from "../TokenManager"

export const getRegions = () => {
    let token = getToken()
    return fetch("https://whiterabbit-server.herokuapp.com/regions", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getRegionsById = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/regions/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}
export const getVarietals = () => {
    let token = getToken()
    return fetch("https://whiterabbit-server.herokuapp.com/varietals", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getVarietalById = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/varietals/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getBodies = () => {
    let token = getToken()
    return fetch("https://whiterabbit-server.herokuapp.com/bodies", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getBodiesById = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/bodies/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}
export const getAcidities = () => {
    let token = getToken()
    return fetch("https://whiterabbit-server.herokuapp.com/acidities", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getAcidityById = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/acidities/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}
export const getDrynesses = () => {
    let token = getToken()
    return fetch("https://whiterabbit-server.herokuapp.com/drynesses", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getDrynessById = (id) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/drynesses/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}

export const createNewVarietalRegion = (wineObject) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/varietalregions`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wineObject)
    })
        .then(response => response.json())
}
export const createRegion = (regionObject) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/regions`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(regionObject)
    })
        .then(response => response.json())
}
export const createVarietal = (varietalObject) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/varietals`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(varietalObject)
    })
        .then(response => response.json())
}
export const createWineBottle = (bottleObject) => {
    let token = getToken()
    return fetch(`https://whiterabbit-server.herokuapp.com/winebottles`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bottleObject)
    })
        .then(response => response.json())
}
export const getWineBottles = () => {
    let token = getToken()
    return fetch("https://whiterabbit-server.herokuapp.com/winebottles", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}