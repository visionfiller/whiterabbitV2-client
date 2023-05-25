import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCustomer, getCustomers } from "../cellar/CellarProvider"

import { Customer } from "./Customer"
import { getMessagesById } from "./SocialProvider"

export const Social = () => {
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()
    const [customer, setCustomer] = useState({})
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

    useEffect(() => {
        getCustomers()
            .then((data) => {
                let newData = data.filter((object) => object.user !== rabbitUserObject.user_id)
                setCustomers(newData)
            })
        getCustomer(rabbitUserObject.user_id).then((data)=> setCustomer(data))
        
    }, []
    )

    return (<>
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">The White Rabbit Community.</h2>
        <div className="w-full text-center  flex row justify-center gap-10 mx-auto p-5 ">
            <button onClick={() => navigate("/social/updateProfile")} className="btn bg-secondary">Update Profile</button>
            <button onClick={() => navigate("messages")} className="btn bg-secondary">My Messages ( {customer?.received_messages?.length} )</button>
        </div>
        {/* <div className="fixed h-full w-full overflow-y-auto mt-10"> */}
        <div className="h-3/4 fixed overflow-y-auto md:static flex row flex-wrap justify-center pb-24"> 
            {customers.map((customer) => {
                return <Customer key={customer.id} customer={customer} />
            })}
        {/* </div> */}
        </div>
    </>
    )
}