import { useState } from "react"
import { CardDetails } from "../library/CardDetails"

export const Wine =({wine}) => {
    const [cardDetails, setCardDetails] = useState(false)

    const HandleCardClick = (event) => {
        event.preventDefault()
        setCardDetails(true)
    }
    const HandleCardClose = (event) => {
        event.preventDefault()
        setCardDetails(false)
    }
    
    return(<>
    <button onClick={(event) => HandleCardClick(event)} className="card w-64 h-64 bg-slate-100 shadow-lg p-4 rounded-sm m-2" >
    <div className="text-center text-secondary font-semibold">{wine?.region?.location} {wine.varietal?.name}</div>
    <div className="text-sm text-secondary text-center m-1">{wine?.region?.country}</div>
    <img className="h-3/5 w-full object-cover" src={wine?.varietal?.image}/>
        </button>
        {cardDetails ? <CardDetails wineDetails={wine} HandleCardClose={HandleCardClose} />
    : ""}
    </>)
}

