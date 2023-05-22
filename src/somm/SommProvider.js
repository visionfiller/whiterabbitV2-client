export const getCustomers = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/users?isStaff=false&_embed=favorites`)
    .then(response => response.json())
}
export const getRegions = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/regions?_sort=location&_order=asc`)
    .then(response => response.json())
}
export const getRegionsById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/regions/${id}`)
    .then(response => response.json())
}
export const getVarietals = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/varietals?_sort=name&_order=asc`)
    .then(response => response.json())
}
export const getVarietalById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/varietals/${id}`)
    .then(response => response.json())
}
export const getBodies = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/bodies`)
    .then(response => response.json())
}
export const getBodiesById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/bodies/${id}`)
    .then(response => response.json())
}
export const getAcidities = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/acidities`)
    .then(response => response.json())
}
export const getAcidityById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/acidities/${id}`)
    .then(response => response.json())
}
export const getDrynesses = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/drynesses`)
    .then(response => response.json())
}
export const getDrynessById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/drynesses/${id}`)
    .then(response => response.json())
}

export const createNewVarietalRegion = (wineObject) => {
    return fetch(` https://white-rabbit-api-k3hmh.ondigitalocean.app/varietalRegions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wineObject)
    })
        .then(response => response.json())
}
export const createRegion = (regionObject) => {
    return fetch(` https://white-rabbit-api-k3hmh.ondigitalocean.app/regions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(regionObject)
    })
        .then(response => response.json())
}
export const createVarietal = (varietalObject) => {
    return fetch(` https://white-rabbit-api-k3hmh.ondigitalocean.app/varietals`, {
        method: "POST",
        headers: {
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