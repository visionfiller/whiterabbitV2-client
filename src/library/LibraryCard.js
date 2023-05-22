import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getFavorites } from "../cellar/CellarProvider"
import { CardDetails } from "./CardDetails"
import { addToFavorites } from "./LibraryProvider"

export const LibraryCard = ({ wine }) => {
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [cardDetails, setCardDetails] = useState(false)

    const wineObject = {
        userId: rabbitUserObject.id,
        varietalRegionId: wine.id
    }
    useEffect(() => {
        // getFavorites(rabbitUserObject.id)
        //     .then((data) => {
        //         setFavorites(data)
            // })
    }, []
    )
    useEffect(() => {
        if (wine.varietalId) {
            setIsLoading(false)
        }
    }, [wine, favorites]
    )
    const StarButton = (wine) => {
        return favorites.map((favorite) => {
            if (favorite.varietalRegionId === wine.id) {
                return <button key={favorite.id} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="" stroke="currentColor" className="fill-yellow-300 w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </button>
            }
            else {
                return ""
            }
        })
    }
    const HandleCardClick = (event) => {
        event.preventDefault()
        setCardDetails(true)
    }
    const HandleCardClose = (event) => {
        event.preventDefault()
        setCardDetails(false)
    }

    return (

        <div key={wine.id} className="card w-60 h-64 m-6 bg-slate-200 hover:bg-third hover:cursor-pointer rounded-none shadow-lg">
            <div className="absolute top-2 right-2">
                {rabbitUserObject.staff ? <button className="btn btn-sm bg-secondary" onClick={() => navigate(`/library/edit/${wine.id}`)}>Edit Details</button>
                    : ""}
                {!rabbitUserObject.staff && favorites.every(favorite => favorite.varietalRegionId !== wine.id) ? <button className="btn btn-sm bg-secondary shadow-2xl shadow-white text-white rounded-full font-extrabold text-xl" onClick={() => addToFavorites(wineObject).then(() => navigate("/cellar"))}> + </button>
                    : ""}
            </div>
            <div className="absolute right-2 top-2">
                {isLoading ? ""
                    : StarButton(wine)}
            </div>
            <div className="card-body p-1 mb-4 h-full">
                <button type="button" onClick={(event) => HandleCardClick(event)}>
                    <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image} />
                </button>
                <div className="card-title m-2 flex flex-col w-full hover:text-white ">
                    <div>{wine?.region?.location} {wine.varietal?.name}</div>
                    <div className="text-sm ">Country: {wine?.region?.country}</div>
                </div>
                {cardDetails ? <CardDetails wineDetails={wine} HandleCardClose={HandleCardClose} />
                    : ""}
            </div>
        </div>
    )
}

