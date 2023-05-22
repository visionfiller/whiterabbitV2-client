import {  Route, Routes } from "react-router-dom"
import { Library } from "../library/Library"
import { Home } from "../home/Home"
import {  WillILikeItSearchContainer } from "../likeit/LikeItContainer"
import { CardDetails } from "../library/CardDetails"
import { CellarContainer } from "../cellar/CellarContainer"
import { Social } from "../social/Social"
import { CustomerDetails } from "../social/CustomerDetails"
import { UpdateProfile } from "../social/UpdateProfile"
import { ChatWine } from "../chat/Chat"
import { Messages } from "../social/Messages"
import { Register } from "../auth/Register"
import { Login } from "../auth/Login"
import { Authorized } from "../auth/Authorized"


export const CustomerViews = (token, setToken, is_staff) => {
 
    return (<div className="pt-20 md:pt-0">
        <div className=" h-full w-full bg-cover opacity-5 -z-10 fixed  bg-blur-xl bg-[url('https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg')] " ></div>

    <Routes>
   
      
        <Route path="/" element={ <Home />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/library" element={ <Library/>} />
        <Route path="/chat" element={ <ChatWine/>} />
        <Route path="/library/details/:varietalRegionId" element={ <CardDetails />} />
        <Route path="/social" element={ <Social />} />
        <Route path="/social/updateProfile" element={ <UpdateProfile/>} />
        <Route path="/social/details/:customerId" element={ <CustomerDetails />} />
        <Route path="/social/messages" element={<Messages />} />
        <Route path="/cellar" element={ <CellarContainer />} />
        <Route path="/like" element={ <WillILikeItSearchContainer />} />
       
       

        
    </Routes>
    </div>
    )
}
