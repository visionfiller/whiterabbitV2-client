import { useEffect, useState } from "react"
import { CardDetails } from "../library/CardDetails"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getCustomer } from "./CellarProvider"


export const Recommendations = ({ user}) => {
    const [varietalRegions, setVarietalRegions] = useState([])
   
    const [cardDetails, setCardDetails] = useState(false)
    const [wineObject, setWineObject] = useState({})
    const [newArray, setNewArray] = useState([])
    useEffect(
        () => {
            getVarietalRegions()
                .then((data) => {
                    setVarietalRegions(data)
                })
           
        }, []
    )
    const HandleCardClick = (event, wine) => {
        event.preventDefault()
        setCardDetails(true)
        setWineObject(wine)
    }
    const HandleCardClose = (event) => {
        event.preventDefault()
        setCardDetails(false)
    }



    useEffect(()=>{
        if(user.favorites){
        let array = varietalRegions.filter((region) => user.favorites.find((favorite => favorite.dryness.id === region.dryness.id || favorite.body.id === region.body.id || favorite.acidity.id === region.acidity.id)))
        let newArray = array.filter(wine => user.favorites.every(favorite => favorite.id !== wine.id))
        console.log(array)
        setNewArray(newArray)
        }
    },[user])
    
   

    return (<>
        <div className="flex flex-col w-full mr-8">
           
                <h2 className="mx-auto text-2xl text-secondary font-semibold  ">Try these different varietals!</h2>
            
            <div className="flex  w-full p-10 justify-evenly">
                <div className="w-full md:w-1/2 flex flex-col  flex-wrap  ">
                    {newArray.length ?
                        newArray.map((wine) => {
                            return (<div className="" key={wine.id}>
                                <button onClick={(event) => HandleCardClick(event, wine)} key={wine.id} id={wine.id} className="badge badge-sm  bg-transparent border-none  font-semibold p-8 my-8 w-full transform hover:scale-125  transition ease-out duration-300">
                                    {wine.varietal.wine_type === 2 ? <><div className="bg-transparent inline-block  absolute  mx-auto text-lg md:text-xl text-secondary">{wine.region?.location} {wine.varietal?.name}</div><img src="https://www.onlygfx.com/wp-content/uploads/2017/04/yellow-paint-brush-stroke-9-300x122.png" className="w-full md:w-full" /></>
                                        : <> <div className="bg-transparent inline-block absolute mx-auto text-lg md:text-xl">{wine.region?.location} {wine.varietal?.name}</div><img src="https://th.bing.com/th/id/R.c70e5150e90226e40dc4a910c3c6151d?rik=g2w8vEBTreQT9w&riu=http%3a%2f%2fwww.onlygfx.com%2fwp-content%2fuploads%2f2018%2f01%2fdark-red-paint-brush-stroke-8.png&ehk=bY9I6XffuX6NpPzViccJziwlHtMo5Y8LHbQz%2fZiuoNM%3d&risl=&pid=ImgRaw&r=0" className="w-full md:w-full" /></>
                                    }
                                </button>
                                {cardDetails ? <CardDetails wineDetails={wineObject} HandleCardClose={HandleCardClose} />
                                    : ""}
                            </div>)
                        })
                        : <div className=" text-secondary font-semibold ">Add some favorites to see our recommendations!</div>}
                </div>
            </div>
        </div>
    </>)
}