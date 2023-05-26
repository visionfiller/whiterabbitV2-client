import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getCustomers, getVarietalRegionsById } from "../cellar/CellarProvider"
import { getVarietalRegions } from "../library/LibraryProvider"
import { MessageForm } from "../social/MessageForm"
import { getMessagesById } from "../social/SocialProvider"
import { getWineBottles } from "./SommProvider"

import { WineList } from "./WineBottleList"

export const Somm = () => {
    const [wineBottles, setWineBottles] = useState([])
    const [varietalRegions, setVarietalRegions] = useState({})
    const [customers, setCustomers] = useState([])
    const [messages, setMessages] = useState([])
    const [messageForm, setMessageForm] = useState(false)
    const [foundCustomer, setFoundCustomer] = useState({})
    const [wineButton, setWineButton] = useState(false)
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

    useEffect(() => {
        getCustomers().then((customerArray) => { setCustomers(customerArray) })
        getWineBottles().then((data) => { setWineBottles(data) })
        getVarietalRegions().then((data) => { setVarietalRegions(data) })
       
    }, []
    )

    const HandleMessageClick = (event, customer) => {
        event.preventDefault()
        setMessageForm(true)
        setFoundCustomer(customer)
    }
    const HandleMessageClose = () => {
        setMessageForm(false)
    }
    const HandleWineClick = (event) => {
        event.preventDefault()
        setWineButton(true)
    }
    const HandleWineClose = () => {
        setWineButton(false)
    }

    const findVarietal = (bottle) => {
        let foundVarietal = varietalRegions.find(varietalRegion => varietalRegion.id === bottle.varietal_region.id)
        return (
            <div>{foundVarietal.varietal?.name}</div>
        )
    }
    const findRegion = (bottle) => {
        let foundRegion = varietalRegions.find(varietalRegion => varietalRegion.id === bottle.varietal_region.id)
        return (
            <div>{foundRegion.region?.location}, {foundRegion.region?.country}</div>
        )
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return <>
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">What would you like to do today?</h2>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between text-center h-full p-8 ">
            <div className="flex flex-col h-full ml-0">
                <div className="w-full max-w-md p-4 bg-primary border border-gray-200 rounded sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-100">WR Customers</h2>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {customers.map((customer) => {
                                return <li key={customer.id} className="py-3 px-4  w-full">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <button onClick={(event) => HandleMessageClick(event, customer)} className=""> <img className="w-16 h-16 rounded-full" src={customer.profile_picture} /></button>
                                            {messageForm ? <MessageForm foundCustomer={foundCustomer} closeButton={HandleMessageClose} />
                                                : ""}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className=" font-medium text-gray-100 truncate dark:text-white">
                                                {customer.full_name}
                                            </p>
                                            {/* <p className="text-sm text-gray-100 truncate dark:text-gray-400">
                                                {customer.email}
                                            </p> */}
                                        </div>
                                        <Link className="" to={`/social/details/${customer.user}`}>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-100 dark:text-white">
                                                {customer.favorites?.length}
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {wineButton ? <WineList varietalRegions={varietalRegions} wineBottles={wineBottles} findRegion={findRegion} findVarietal={findVarietal} openInNewTab={openInNewTab} HandleWineClose={HandleWineClose} />
                : ""}
            <div className="md:grid md:grid-cols-2 md:p-16 md:pr-0">
                <Link className="md:border-b-2 md:border-r-2 border-secondary" to="/somm/createVarietalRegion">
                    <img className=" w-3/4 h-3/4 mx-auto" src="https://th.bing.com/th/id/R.9bacebdd9ed8ea8b3f3b8fe496bbec67?rik=xYCoMrSb3nMLDA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f4%2f2%2f1%2fe%2f1197104269542805265PanamaG_French_outline.svg.hi.png&ehk=87yZWE1OvqaEcmAJT4KRka80DBEBxrsZsvF8joayECc%3d&risl=&pid=ImgRaw&r=0" />
                    <div className="text-center p-4 font-semibold">Assign a new varietal region</div>
                </Link>
                <Link className="md:border-b-2 md:border-secondary" to="/somm/createWineBottle">
                    <img className="object-contain w-3/4 h-3/4 mx-auto " src="https://static.thenounproject.com/png/26597-200.png" />
                    <div className="text-center p-4 font-semibold">Add a new bottle</div>
                </Link>
                <Link className="md:border-r-2 md:border-secondary pt-8" to="/sommMessages">
                    <img className="object-cover h-3/4 w-3/4 mx-auto" src="https://logodix.com/logo/447066.png" />
                    <div className="text-center p-4 font-semibold">Check messages ( {messages.length} )</div>
                </Link>
                <Link onClick={(event) => HandleWineClick(event)} className="mt-8" to="">
                    <img className="object-cover h-3/4 w-3/4 mx-auto " src="https://th.bing.com/th/id/R.db5809040703e9d5323ee0d78fcc7cdd?rik=dC1X4XBIPeA17Q&riu=http%3a%2f%2fgetdrawings.com%2fimages%2fbottle-of-wine-drawing-7.png&ehk=fqUGNoLeF%2f5bDoTf8At5yNTgwNZj6Uss0xfxU4%2bkgJI%3d&risl=&pid=ImgRaw&r=0" />
                    <div className="text-center p-4 font-semibold">See WR's wines</div>
                </Link>
            </div>
        </div>
    </>
}