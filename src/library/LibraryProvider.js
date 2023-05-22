import { getToken } from "../TokenManager"

export const getVarietalRegions = () => {
    let token = getToken()
    return fetch("http://localhost:8000/varietalregions", {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getVarietalRegionsById = (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/varietalregions/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getAllFavorites = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/favorites`)
    .then(response => response.json())
}
export const getVarietalRegionsToPaginate = (currentPage) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/varietalRegions?_page=${currentPage}&_limit=20_expand=dryness&_expand=body&_expand=acidity&_expand=varietal&_expand=region`)
    .then(response => response.json())
}
export const getWineTypes = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/wineTypes`)
    .then(response => response.json())
}

export const addToFavorites = (wineObject) => {
    return fetch(` https://white-rabbit-api-k3hmh.ondigitalocean.app/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wineObject)
    })
        .then(response => response.json())
}

export const updateVarietalRegion =(varietalRegionObject) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/varietalRegions/${varietalRegionObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(varietalRegionObject)
      })
      .then(response => response.json())
}

export const Geocoding = (city) => {
    return fetch (`https://graphhopper.com/api/1/geocode?q=${city}&limit=1&key=f8c2147e-b7dc-4d37-9d6e-a0a259f410a8`)
    .then(response => response.json())
}
