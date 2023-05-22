import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CreateNewMessage } from "../social/SocialProvider"

export const ChatWine = () => {
    const navigate = useNavigate()
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [message, setMessage] = useState({
        receiverUserId: 1,
        senderUserId: rabbitUserObject.id,
        timeStamp: new Date().toLocaleString()
    })
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      };


  
    return (<>
        <div className="w-full h-full flex flex-col md:flex md:flex-row p-24">

            <div className="w-full mx-auto p-8 flex flex-row md:w-1/2 md:flex-col">
                <h2 className="my-auto md:my-0 text-2xl font-semibold text-secondary underline text-center">Check these guys out for more wine info!</h2>
                <div className="flex flex-col p-8 items-center justify-evenly">
    
                    <Link href="#" onClick = {() => openInNewTab("https://winefolly.com/")}> <img className="w-auto h-16 md:h-24 md:w-24" src="https://ww1.prweb.com/prfiles/2021/02/24/18071870/wine-folly-classic-logo.png" /></Link>
                    <Link href="#" onClick = {() => openInNewTab("https://www.wineenthusiast.com/")}><img className="w-auto h-16 md:h-24 md:w-auto m-8 text-center" src="https://www.freemanwinery.com/assets/upload/images/logos/.thumbs/publications-Wine-Enthusiast-logo-800.0.0.png" /></Link>
                    <Link href="#" onClick = {() => openInNewTab("https://www.wine-searcher.com/")}><img className="w-auto h-16 md:h-24 md:w-auto m-8 text-center" src="https://www.openimagination.co.uk/sites/default/files/styles/partner_logo/public/wine-searcher-logo.png?itok=t9NmDzy9" /></Link>
                    <Link href="#" onClick= {() => openInNewTab("https://drizly.com/")}><img className="w-auto h-16 md:h-24 md:w-24"src="https://bevalcinsights.com/wp-content/uploads/2022/06/cropped-Drizly_Logo_RGB_Red.png"/></Link>
                </div>

            </div>
            <form className="w-full md:w-1/2 h-1/2 mx-auto my-10 border-black border-2 p-8 bg-white">
                <h2 className="text-center text-2xl text-secondary font-semibold">Send us a message!</h2>
                <div className="relative z-0 w-full mb-6 group p-8 m-8">
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...message }
                                copy.body = evt.target.value
                                setMessage(copy)
                            }}
                        type="text" name="body" id="body" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="body" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                </div>
                <div className="relative z-0 w-full mb-6 group text-center"><button onClick={() => CreateNewMessage(message).then(navigate("/home"))} className="btn bg-secondary mx-auto">Send</button></div>

            </form>


        </div>

    </>)
}