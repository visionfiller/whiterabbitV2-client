import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCustomer } from "../cellar/CellarProvider"
import { getUserById } from "../nav/NavProvider"
import { CreateNewMessage } from "./SocialProvider"

export const ReplyForm = ({sender, closeButton}) => {
    const[isLoading, setIsLoading] = useState(true)
    const[foundUser, setFoundUser] = useState({})
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [message, setMessage] = useState({
        body: "",
        receiver: sender

    })
   
const navigate = useNavigate()
useEffect( () => {
        getCustomer(sender)
        .then((data) => {
            setFoundUser(data)
            setIsLoading(false)
          
        })
    },[]
)

return(<>
 <div className="fixed inset-0 z-20  backdrop-blur-sm">
 <form className="bg-white md:w-1/2 md:h-1/2 mx-auto my-10 rounded-lg border-secondary border-2 p-8">
 <div className="text-right">
        <button type="button" className="text-right" onClick={(event) => closeButton(event)}>Close</button>
        </div>
   {isLoading ? ""
       :  <h2 className="text-center text-2xl text-secondary font-semibold">Reply to {foundUser.full_name}</h2>
}
 <div className="relative z-0 w-full mb-6 group p-8 m-8"> 
                <input onChange={
                                (evt) => {
                                    const copy = { ...message }
                                    copy.body= evt.target.value
                                    setMessage(copy)
                                }}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 pee" name="body" id="body" type="text" placeholder="e.g. Vinho Verde!"/>
                                </div>
                                <div className="relative z-0 w-full mb-6 group text-center">
            <button onClick={()=> CreateNewMessage(message).then(navigate("/social"))}className="btn bg-secondary">Send Message</button>
            </div>
        </form>
    </div></>)
}
