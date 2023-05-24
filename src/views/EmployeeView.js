import { Route, Routes } from "react-router-dom"
import { Authorized } from "../auth/Authorized"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { WineCellar } from "../cellar/WineCellar"
import { ChatWine } from "../chat/Chat"
import { Home } from "../home/Home"

import { CardDetails } from "../library/CardDetails"
import { EditVarietalRegion } from "../library/EditVarietalRegion"
import { Library } from "../library/Library"
import { CustomerDetails } from "../social/CustomerDetails"
import { Messages } from "../social/Messages"
import { ReplyForm } from "../social/ReplyForm"

import { Somm } from "../somm/Somm"

import { VarietalRegionForm } from "../somm/VarietalRegionForm"
import { WineBottleForm } from "../somm/WineBottleForm"
import { WineList } from "../somm/WineBottleList"

export const EmployeeViews = (token, setToken, is_staff) => {
    return (<div className="pt-20 md:pt-0">
        <div className=" h-full w-full bg-cover opacity-5 -z-10 fixed  bg-blur-xl bg-[url('https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg')] " ></div>
    <Routes>
    <Route path="/" element={ <Somm />} />
       {/* <Route path="/home" element={ <Home />} />
       <Route path="/library/details/:varietalRegionId" element={ <CardDetails />} />
        <Route path="/library" element={ <Library/>} />
        <Route path="/chat" element={ <ChatWine/>} />
        <Route path="/library/edit/:varietalRegionId" element={ <EditVarietalRegion />} />
        <Route path="/cellar" element={ <WineCellar />} /> */}
        <Route path="/somm" element={ <Somm />} />
        <Route path="/somm/WineList" element={ <WineList/>} />
        <Route path="/sommMessages" element={ <Messages />} />
        <Route path="/social/reply/:customerId" element={<ReplyForm />} />
        <Route path="/somm/createVarietalRegion" element={ <VarietalRegionForm />} />
        <Route path="/somm/createWineBottle" element={ <WineBottleForm />} />
        <Route path="/social/details/:customerId" element={ <CustomerDetails />} />
        {/* <Route path="/somm/createVarietalRegion/createRegion" element={ <RegionForm />} /> */}
        {/* <Route path="/somm/createVarietalRegion/createVarietal" element={<VarietalForm />} /> */}
     
        
       
    </Routes>
    </div>
    )
}