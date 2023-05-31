// export const createFoundWineSearch= (foundObject) => {
//     return fetch(` https://white-rabbit-api-k3hmh.ondigitalocean.app/foundWineSearches`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(foundObject)
//     })
//         .then(response => response.json())
// }

// export const getFoundWineSearches = () => {
//     return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/foundWineSearches`)
//     .then(response => response.json())
// }

// export const deleteFoundWineSearch = (id) => {
//     return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/foundWineSearches/${id}`, {
//         method: "DELETE"
//     })
//         .then(getFoundWineSearches)
// }