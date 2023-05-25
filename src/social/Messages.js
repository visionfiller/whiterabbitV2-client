import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getCustomer, getCustomers, getUsers } from "../cellar/CellarProvider"
import { ReplyForm } from "./ReplyForm"
import { deleteMessage, getMessagesById } from "./SocialProvider"

export const Messages = () => {
    const [users, setUsers] = useState([])
    const [receivedMessages, setReceivedMessages] = useState([])
    const [ sentMessages, setSentMessages] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [messageForm, setMessageForm] = useState(false)
    const [messageReply, setMessageReply] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        getCustomers()
            .then((data) => {
                setUsers(data)
        
            })
        getMessages()       

    }, []
    )
    const getMessages = ()=>{getCustomer(rabbitUserObject.user_id).then((data) => setReceivedMessages(data.received_messages)& setSentMessages(data.sent_messages))}

    const findSender = (message) => {
        if (users.length) {
            let foundSender = users.filter(user => receivedMessages.find((message)=> message.sender === user.id))
           
            return <div className="font-semibold text-center text-xl"> From {foundSender[0].full_name}</div>
        }
    }
    const findReceiver = (message) => {
        if (users.length) {
            let foundReceiver = users.filter(user => sentMessages.find((message)=> message.receiver === user.id))
           
            return <div className="font-semibold text-center text-xl">To {foundReceiver[0].full_name}</div>
        }
    }

    const HandleDelete = (message) => {
        deleteMessage(message).then(()=> getMessages())
            
            

    }
    const HandleMessageClick = (event, message) => {
        event.preventDefault()
        setMessageForm(true)
        setMessageReply(message)
    }
    const HandleMessageClose = () => {

        setMessageForm(false)
    }


    return (<>
        {rabbitUserObject.is_staff ? <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/somm")}>Back to Mad Hatter</button></div>
            : <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/social")}>Back to WR Community</button></div>}
       <div className="flex flex-col items-center">
        <div className="w-1/2">
         <h2 className="text-center p-6 text-secondary font-semibold text-4xl">Your Messages</h2>
        <ul className="flex row justify-evenly border-8 p-8 border-black bg-third w-3/5 mx-auto">
            {receivedMessages?.map((message) => {
                return <li key={message.id} className="p-2 m-2 h-3/5 bg-yellow-200 shadow-xl hover hover:bg-yellow-100 rounded-sm">
                    <div>{findSender(message)}</div>
                    <div className="text-sm">{message.formatted_date}</div>
                    <div className="m-6">{message.body}</div>
                    <div className="flex row justify-between">
                        <button type="button" onClick={(event) => HandleMessageClick(event, message)}>Reply</button>
                        {messageForm ? <ReplyForm sender={message.sender} closeButton={HandleMessageClose} />
                            : ""}
                        <button onClick={() => HandleDelete(message)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        </button>
                    </div>
                </li>

            })}
        </ul>
        </div>
        <div className="w-1/2">
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">Sent Messages</h2>
        <ul className="flex row justify-evenly border-8 p-8 border-black bg-third  mx-auto">
            {sentMessages?.map((message) => {
                return <li key={message.id} className="p-2 m-2 h-3/5 bg-yellow-200 shadow-xl hover hover:bg-yellow-100 rounded-sm">
                    <div>{findReceiver(message)}</div>
                    <div className="text-sm">{message.formatted_date}</div>
                    <div className="m-6">{message.body}</div>
                    <div className="flex row justify-between">
                        {/* <button type="button" onClick={(event) => HandleMessageClick(event, message)}>Reply</button>
                        {messageForm ? <ReplyForm messageObject={messageReply} closeButton={HandleMessageClose} />
                            : ""} */}
                        <button onClick={() => HandleDelete(message)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        </button>
                    </div>
                </li>

            })}
        </ul>
        </div>
        </div>
    </>
    )
}