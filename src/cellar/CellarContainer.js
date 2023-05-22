import { useEffect, useState } from "react"
import { getCustomer, getCustomers} from "./CellarProvider"
import { Recommendations } from "./Recommendations"
import { MatchedWineBottles, WineBottles } from "./WineBottles"
import { WineCellar } from "./WineCellar"

export const CellarContainer = () => {
    const [user, setUser] = useState({})
    const [favorites, setFavorites] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

    useEffect(
        () => {
            getCustomer(parseInt(rabbitUserObject.user_id))
                .then((data) => {
                    setUser(data)
                })
           
        }, []
    )

    return (<>
        <img className="h-screen w-full object-cover opacity-5 absolute right-0  b-blur-xl -z-10 " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg" />
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">{user.full_name}'s Favorites</h2>
        <WineCellar rabbitUserObject={rabbitUserObject} favorites={user.favorites}/>
       
            <div className="flex flex-col md:flex md:flex-row w-full p-8">
                {/* <Recommendations favorites={user.favorites} /> */}
                {/* <MatchedWineBottles rabbitUserObject={rabbitUserObject} /> */}
            
        </div>
    </>)
}