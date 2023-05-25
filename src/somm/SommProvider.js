import { getToken } from "../TokenManager"

export const getRegions = () => {
    let token = getToken()
    return fetch("http://localhost:8000/regions", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getRegionsById = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/regions/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}
export const getVarietals = () => {
    let token = getToken()
    return fetch("http://localhost:8000/varietals", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getVarietalById = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/varietals/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getBodies = () => {
    let token = getToken()
    return fetch("http://localhost:8000/bodies", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getBodiesById = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/bodies/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}
export const getAcidities = () => {
    let token = getToken()
    return fetch("http://localhost:8000/acidities", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getAcidityById = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/acidities/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}
export const getDrynesses = () => {
    let token = getToken()
    return fetch("http://localhost:8000/drynesses", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getDrynessById = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/drynesses/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}

export const createNewVarietalRegion = (wineObject) => {
    let token = getToken()
    return fetch(`http://localhost:8000/varietalregions`, {
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
    return fetch(`http://localhost:8000/regions`, {
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
    return fetch(`http://localhost:8000/varietals`, {
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
    return fetch(` https://white-rabbit-api-k3hmh.ondigitalocean.app/wineBottles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bottleObject)
    })
        .then(response => response.json())
}

export const getWineBottles = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/wineBottles`)
    .then(response => response.json())
}