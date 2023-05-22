import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { CardDetails } from "../library/CardDetails"
import { getVarietalRegions } from "../library/LibraryProvider"
import { MessageForm } from "./MessageForm"
import { getCustomerById } from "./SocialProvider"

export const CustomerDetails = ({ }) => {
    const { customerId } = useParams()
    const [varietalRegions, setVarietalRegions] = useState([])
    const [foundCustomer, setFoundCustomer] = useState({})
    const navigate = useNavigate()
    const [messageForm, setMessageForm] = useState(false)
    const [cardDetails, setCardDetails] = useState(false)
    const [foundWine, setFoundWine] = useState({})
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

    useEffect(() => {
        if (customerId) {
            getCustomerById(customerId)
                .then((data) => {
                    setFoundCustomer(data)
                })
        }
    }, [customerId]
    )
    useEffect(() => {
        if (foundCustomer.id) {
            getVarietalRegions()
                .then((data) => {
                    let newData = data.filter(varietalRegion => foundCustomer.favorites.find((favorite) => favorite.varietalRegionId === varietalRegion.id))
                    setVarietalRegions(newData)
                })
        }
    }, [foundCustomer]
    )
    const HandleMessageClick = (event) => {
        event.preventDefault()
        setMessageForm(true)
    }
    const HandleMessageClose = () => {
        setMessageForm(false)
    }
    const HandleCardClick = (event, wine) => {
        event.preventDefault()
        setCardDetails(true)
        setFoundWine(wine)
    }
    const HandleCardClose = (event) => {
        event.preventDefault()
        setCardDetails(false)
    }
    return (<>
        {rabbitUserObject.staff ? <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/somm")}>Back to Mad Hatter</button></div>
            : <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/social")}>Back to WR Community</button></div>}
        <h2 className="text-4xl text-center pb-4">{foundCustomer.fullName}'s Favorite Wines</h2>
        <div className="w-full text-center  flex row justify-center gap-10">
            <button onClick={(event) => HandleMessageClick(event)} className="btn bg-secondary">Send {foundCustomer.fullName} a message</button>
            {messageForm ? <MessageForm foundCustomer={foundCustomer} closeButton={HandleMessageClose} />
                : ""}
        </div>
        <div className="w-screen p-4">
        <div className="fixed md:static overflow-y-auto h-3/4  flex flex-col md:grid md:grid-cols-4 content-around w-screen p-10">
            {varietalRegions.map((wine) => {
                return <div key={wine.id} className="card w-64 h-64 bg-slate-200 shadow-xl m-4">
                    <div className="card-body p-2 m-2 h-full ">
                        <button className="" onClick={(event) => HandleCardClick(event, wine)}>
                            <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image} />
                        </button>
                        <div className="card-title m-2 flex flex-col w-full">
                            <div>{wine?.region?.location} {wine.varietal?.name}</div>
                            <div className="text-sm">Country: {wine?.region?.country}</div>
                        </div>
                    </div>
                </div>
            })}
            {cardDetails ? <CardDetails wineDetails={foundWine} HandleCardClose={HandleCardClose} />
                : ""}
        </div>
        </div>
    </>)
}