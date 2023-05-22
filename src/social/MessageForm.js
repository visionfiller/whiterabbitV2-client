import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { CreateNewMessage } from "./SocialProvider"

export const MessageForm = ({closeButton,foundCustomer}) => {
   const navigate = useNavigate()
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [message, setMessage] = useState({
        receiverUserId: foundCustomer.id,
        senderUserId: rabbitUserObject.id,
        timeStamp: new Date().toLocaleString()
    })

    return(<>
    
        <div className="fixed inset-0 z-20 w-full backdrop-blur-sm ">
        <form className="bg-white w-4/5 h-1/2 md:w-1/2 md:h-1/2 mx-auto my-10 rounded-lg border-secondary border-2 p-8">
            <div className="text-right pt-0 mt-0 text-2xl ">
        <button type="button" className="text-right" onClick={(event) => closeButton(event)}>X</button>
        </div>
        <h2 className="text-center text-2xl text-secondary font-semibold">Send {foundCustomer.fullName} A Message!</h2>
                <div className="relative z-0 w-full mb-6 group p-8 m-8">
                <input onChange={
                                (evt) => {
                                    const copy = { ...message }
                                    copy.body= evt.target.value
                                    setMessage(copy)
                                }}
                                type="text" name="body" id="body" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="body" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                            </div>
                <div className="relative z-0 w-full mb-6 group text-center">
            {rabbitUserObject.staff ? <button type ="button" onClick={()=> CreateNewMessage(message).then(closeButton)}className="btn bg-secondary">Send Message</button>
            :  <button type ="button" onClick={()=> CreateNewMessage(message).then(navigate("/social"))}className="btn bg-secondary">Send Message</button>}
            </div>
        </form></div>
   
    </>)
}

