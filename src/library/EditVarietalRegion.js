import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { getAcidities, getBodies, getDrynesses } from "../somm/SommProvider"
import { getVarietalRegionsById, updateVarietalRegion } from "./LibraryProvider"

export const EditVarietalRegion = () => {
    const { varietalRegionId } = useParams()
    const [varietalRegion, setVarietalRegion] = useState({
        body: "",
        acidity: "",
        dryness: ""
    })
    const [bodies, setBodies] = useState([])
    const [acidities, setAcidities] = useState([])
    const [drynesses, setDrynesses] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (varietalRegionId) {
            getVarietalRegionsById(varietalRegionId)
                .then((object) => {
                    setVarietalRegion(object)
                    setIsLoading(false)
                })
        }
        else {
            setIsLoading(false)
        }

    }, [varietalRegionId]
    )
    useEffect(
        () => {
            getBodies()
                .then((data) => {
                    setBodies(data)
                })
            getAcidities()
                .then((data) => {
                    setAcidities(data)
                })
            getDrynesses()
                .then((data) => {
                    setDrynesses(data)
                })
        }, []
    )

    const HandleControlledInputChange = (event) => {
        const newVarietalRegion = { ...varietalRegion }
        switch (event.target.name) {
            case "body":
                newVarietalRegion[event.target.name] = bodies.find((body)=> body.id === parseInt(event.target.value))
                break
            case "acidity":
                newVarietalRegion[event.target.name] = acidities.find((acidity)=> acidity.id === parseInt(event.target.value))
                break
            case "dryness":
            newVarietalRegion[event.target.name] = drynesses.find((dryness)=> dryness.id === parseInt(event.target.value))
        }
        setVarietalRegion(newVarietalRegion)
    }

    const HandleSaveButton = () => {
        setIsLoading(true)
        if (varietalRegionId) {

           
               
            updateVarietalRegion({
                
                     id:varietalRegion.id,
                    body: varietalRegion.body.id,
                    acidity: varietalRegion.acidity.id,
                    dryness: varietalRegion.dryness.id
                

            })
                .then(() => navigate(`/library`))
        }
    }

    return (<>
      <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/library")}>Back to Library</button></div>
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">Edit Varietal Region</h2>
        <div className="w-full h-screen flex row px-10  ">
            <form className="rounded text-center w-full md:w-1/2 h-3/4 mx-auto my-10 border-primary border-2 p-16 flex flex-col gap-2 justify-evenly items-center ">
                <h2 className="text-2xl font-semibold" >Update Information for {varietalRegion.varietal?.name} in {varietalRegion.region?.location}</h2>
                <img className=" w-full md:w-1/3 p-8"src={varietalRegion.varietal?.image}/>
                <fieldset className="">
                    <select className="block py-2.5 px-0 text-center w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" name="body" value={varietalRegion.body.id} onChange={HandleControlledInputChange}>
                        <option value="0">Select a new body type</option>
                        {bodies.map((body) => {
                            return <option key={body.id} value={body.id}>{body.density}</option>
                        })}
                    </select>
                </fieldset>
                <fieldset>
                    <select className="block py-2.5 px-0 text-center w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" name="acidity" value={varietalRegion.acidity.id} onChange={HandleControlledInputChange}>
                        <option value="0">Select a new acidity level</option>
                        {acidities.map((acidity) => {
                            return <option key={acidity.id} value={acidity.id}>{acidity.style}</option>
                        })}
                    </select>
                </fieldset>
                <fieldset>
                    <select className="block py-2.5 px-0 w-full text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" name="dryness" value={varietalRegion.dryness.id} onChange={HandleControlledInputChange}>
                        <option value="0">Select a new dryness level</option>
                        {drynesses.map((dryness) => {
                            return <option key={dryness.id} value={dryness.id}>{dryness.level}</option>
                        })}
                    </select>
                </fieldset>
                <button className="btn bg-primary" disabled={isLoading}
                    onClick={event => {
                        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                        HandleSaveButton()
                    }}>
                    Submit Changes to Varietal Region
                </button>
            </form>
        </div>
    </>)


}