import { useEffect, useState } from "react"
import { getCustomer, getFavorites } from "../cellar/CellarProvider"
import { CardDetails } from "../library/CardDetails"
import { getVarietalRegions } from "../library/LibraryProvider"


export const LikeItSearchedList = ({ searchTermStateVarietal, searchTermStateRegion }) => {
    const [varietalRegions, setVarietalRegions] = useState([])
    const [foundWine, setFoundWine] = useState({})
    const [favorites, setFavorites] = useState([])
    const [probability, setProbability] = useState(false)
    const [filteredVarietalRegions, setFiltered] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [cardDetails, setCardDetails] = useState(false)
    const [foundDetails, setFoundDetails] = useState({})
    useEffect(() => {
        getVarietalRegions()
            .then((data) => {
                setVarietalRegions(data)
            })
        getCustomer(rabbitUserObject.user_id)
            .then((data) => {
                setFavorites(data.favorites)
            })
    }, []
    )

    useEffect(() => {
        getVarietalRegions()
            .then((varietalRegionsArray) => {
                let favoriteRegions = varietalRegionsArray.filter(region => favorites.find((favorite) => favorite.id === region.id))
                setFiltered(favoriteRegions)
            })
    }, [favorites]
    )

    useEffect(() => {
        if (searchTermStateVarietal.length) {
            const foundVarietals = varietalRegions.filter((varietalRegion) => {
                return varietalRegion.varietal?.name.toLowerCase().includes(searchTermStateVarietal.toLowerCase())
            })
            const foundWine = foundVarietals.find((varietalRegion) => {
                return varietalRegion.region?.country.toLowerCase().includes(searchTermStateRegion.toLowerCase())
            })
            setFoundWine(foundWine)
        }

        else {
            setFoundWine({})
        }
    }, [searchTermStateVarietal, searchTermStateRegion]
    )

    const HandleSaveSearch = (event) => {
        event.preventDefault()
        if (foundWine.id) {
            setProbability(true)
            calculatePercentage(foundWine)
        }
    }
    const HandleCardClick = (event, wine) => {
        event.preventDefault()
        setCardDetails(true)
        setFoundDetails(wine)
    }
    const HandleCardClose = (event) => {
        event.preventDefault()
        setCardDetails(false)
    }

    const calculatePercentage = (foundWine) => {
        let bodyRange = foundWine.body.id + 1
        let bodyRangeTwo = foundWine.body.id - 1
        let bodyArray = filteredVarietalRegions.filter(varietalRegion => (varietalRegion.body.id === bodyRange) || (varietalRegion.body.id === foundWine.body.id) || (varietalRegion.body.id === bodyRangeTwo))

        let drynessUp = foundWine.dryness.id + 1
        let drynessDown = foundWine.dryness.id - 1
        let drynessArray = filteredVarietalRegions.filter(varietalRegion => varietalRegion.dryness.id === foundWine.dryness.id || varietalRegion.dryness.id === drynessUp || varietalRegion.dryness.id === drynessDown)

        let acidityArray = filteredVarietalRegions.filter(varietalRegion => varietalRegion.acidity.id === foundWine.acidity.id)

        let bodyPercentage = bodyArray.length / filteredVarietalRegions.length
        let drynessPercentage = drynessArray.length / filteredVarietalRegions.length
        let acidityPercentage = acidityArray.length / filteredVarietalRegions.length
        let wineAverage = (bodyPercentage + drynessPercentage + acidityPercentage) / 3

        return (<div className="h-full p-10 text-secondary">
            <div className="text-2xl">{foundWine.region.location}, {foundWine.region.country}  {foundWine.varietal.name}</div>
            <h2>Matched percentage to your favorites</h2>
            <div>Body: {parseFloat(bodyPercentage * 100).toFixed(0)}% </div>
            <div>Dryness: {parseFloat(drynessPercentage * 100).toFixed(0)}% </div>
            <div>Acidity:{parseFloat(acidityPercentage * 100).toFixed(0)}% </div>
            {wineAverage > .5 ? <div className="text-2xl font-extrabold text-secondary">YES! I think you'll like this wine</div>
                : <div className="text-2xl font-extrabold text-secondary">No, it might not be for you :(</div>
            }
        </div>)
    }
    return (<>
        {foundWine ? <> <div className="card w-64 h-64 bg-slate-100 shadow-xl p-4 m-2 text-secondary">
            <div>{foundWine?.region?.location} {foundWine.varietal?.name}</div>
            <div>{foundWine?.region?.country}</div>
            <img className="h-3/5 object-cover" src={foundWine?.varietal?.image} />
            <button className="btn btn-xs bg-primary text-white m-2" onClick={(event) => HandleSaveSearch(event)}>See Results</button></div>
        </>
            : "Wine not found in our library"}

        {probability && foundWine ? calculatePercentage(foundWine)
            : ""}
        {probability && foundWine ? <button onClick={(event) => HandleCardClick(event, foundWine)} className=""><img className="w-1/2 mx-auto"src="https://cdn-icons-png.flaticon.com/512/3698/3698569.png" /><span className="btn  bg-primary text-white m-2">Tell me more!</span>
        </button>
            : ""}
        {cardDetails ? <CardDetails HandleCardClose={HandleCardClose} wineDetails={foundDetails} />
            : ""}
    </>)
}