import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CreateNewMessage } from "../social/SocialProvider"

export const ChatWine = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };



    return (<>
        <div className="w-full h-full flex flex-col md:flex md:flex-row p-24">

            <div className="w-full mx-auto p-8 flex flex-row md:w-1/2 md:flex-col">
                <h2 className="my-auto md:my-0 text-2xl font-semibold text-secondary underline text-center">Check these guys out for more wine info!</h2>
                <div className="flex flex-col p-8 items-center justify-evenly">

                    <Link href="#" onClick={() => openInNewTab("https://winefolly.com/")}> <img className="w-auto h-16 md:h-24 md:w-24" src="https://ww1.prweb.com/prfiles/2021/02/24/18071870/wine-folly-classic-logo.png" /></Link>
                    <Link href="#" onClick={() => openInNewTab("https://www.wineenthusiast.com/")}><img className="w-auto h-16 md:h-24 md:w-auto m-8 text-center" src="https://www.freemanwinery.com/assets/upload/images/logos/.thumbs/publications-Wine-Enthusiast-logo-800.0.0.png" /></Link>
                    <Link href="#" onClick={() => openInNewTab("https://www.wine-searcher.com/")}><img className="w-auto h-16 md:h-24 md:w-auto m-8 text-center" src="https://www.openimagination.co.uk/sites/default/files/styles/partner_logo/public/wine-searcher-logo.png?itok=t9NmDzy9" /></Link>
                    <Link href="#" onClick={() => openInNewTab("https://drizly.com/")}><img className="w-auto h-16 md:h-24 md:w-24" src="https://bevalcinsights.com/wp-content/uploads/2022/06/cropped-Drizly_Logo_RGB_Red.png" /></Link>
                </div>

            </div>
            <form className="w-full md:w-1/4 h-1/2 mx-auto my-10 border-black border-2 p-8 bg-white">
                <h2 className="text-center text-2xl text-secondary font-semibold">Send me a message!</h2>
                <div className="flex row items-center justify-evenly p-10" >
                    <Link className="" onClick={() => window.location = 'mailto:visionfiller@gmail.com'}><img className="w-16 h-auto" src="https://th.bing.com/th/id/R.88d88f1872909358b97ffa695cb97b66?rik=A77az%2fwRYB%2bLrw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fGmail_logo_icon.png&ehk=8gYQfqc8h6fYCXddKEQE%2blQ7004YVwPu1S2LSHmiUgE%3d&risl=&pid=ImgRaw&r=0" /></Link>
                    <Link href="#" onClick={() => openInNewTab("https://linkedin.com/in/visionfiller")}><img className="w-24 h-auto" src="https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png" /></Link>
                </div>

            </form>


        </div>

    </>)
}