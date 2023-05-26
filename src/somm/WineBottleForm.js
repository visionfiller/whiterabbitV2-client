import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { createWineBottle } from "./SommProvider"

export const WineBottleForm = () => {
    const [wineBottle, setWineBottle] = useState({
        name: "",
        vintage: 0,
        link: "",
        image: "",
        varietal_region: 0
    })
    const [varietalRegions, setVarietalRegions] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            getVarietalRegions()
            .then((data) => {
                let sortedVarietalRegions = data.sort((a, b) => (a.region.country > b.region.country ? 1 : (a === b ? 0 : -1)))
                setVarietalRegions(sortedVarietalRegions)
            })
        },[]
    )

    const HandleClickSaveWineBottle =(event) => {
        event.preventDefault()
    if(wineBottle.name && wineBottle.vintage && wineBottle.varietal_region && wineBottle.image && wineBottle.link) {
        createWineBottle(wineBottle)
        .then(() => {
            navigate("/somm")
        })
    }
        else{
            window.alert("Please fill in all fields")
        }
    
    
    }


    return(<>
       <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/somm")}>Back to Mad Hatter</button></div>
     <h2 className="text-center p-6 text-secondary font-semibold text-4xl">Add a New Wine Bottle</h2>
       <div className="w-full h-screen flex row px-10  ">
        <form className="rounded text-center w-full md:w-1/2 h-3/4 mx-auto my-10 border-primary border-2 p-4 md:p-16 flex flex-col justify-evenly items-center ">
      
        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
            <label>Name of Wine</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.name = evt.target.value
                    setWineBottle(copy)
                }}
            className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer" name="name" id="name" type="text" placeholder="e.g. Les Petit Fers"/>
            
        </fieldset>
        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
            <label>Wine Bottle Image</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.image = evt.target.value
                    setWineBottle(copy)
                }}
            className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer" name="name" id="name" type="text" placeholder="image URL"/>
            
        </fieldset>
        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
            <label>Wine Vintage</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.vintage = evt.target.value
                    setWineBottle(copy)
                }}
                className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer" name="name" id="name" type="text" placeholder="e.g. 2019 or 2022"/>
            
        </fieldset>
        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
            <label>Website URL</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.link = evt.target.value
                    setWineBottle(copy)
                }}
                className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer" name="name" id="name" type="text" placeholder="e.g.https://www.wines.com"/>
            
        </fieldset>
        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
        <label>What type of wine?</label>
            <select
                    className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        name="varietal_region"
                        onChange={
                            (evt) => {
                                const copy = { ...wineBottle }
                                copy.varietal_region = parseInt(evt.target.value)
                                setWineBottle(copy)
                            }}>

                        <option name="varietal_region"> Choose Varietal Region...</option>
                        {varietalRegions.map(
                            (varietalRegion) => {
                                return (<option key={varietalRegion.id}
                                    value={varietalRegion.id}>

                                    {varietalRegion.region?.location}, {varietalRegion.region?.country} - {varietalRegion.varietal.name} </option>)
                            }
                        )}
                    </select>
        </fieldset>
        <button onClick={(event) => HandleClickSaveWineBottle(event) }className="btn" >Add Wine Bottle</button>
    </form>
    
    </div>
    </>)
}