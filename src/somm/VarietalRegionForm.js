import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegionForm } from "./RegionForm"
import { createNewVarietalRegion, getAcidities, getAcidityById, getBodies, getBodiesById, getDrynessById, getDrynesses, getRegions, getRegionsById, getVarietalById, getVarietals } from "./SommProvider"
import { VarietalForm } from "./VarietalForm"

export const VarietalRegionForm = () => {
    const [varietals, setVarietals] = useState([])
    const [displayVarietalHTML, setDisplayVarietal] = useState([])
    const [regions, setRegions] = useState([])
    const [displayRegionHTML, setDisplayRegion] = useState([])
    const [bodies, setBody] = useState([])
    const [displayBodyHTML, setDisplayBody] = useState([])
    const [acidities, setAcidity] = useState([])
    const [displayAcidityHTML, setDisplayAcidity] = useState([])
    const [drynesses, setDryness] = useState([])
    const [displayDrynessHTML, setDisplayDryness] = useState([])
    const [newVarietalRegion, update] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const [varietalForm, setVarietalForm] = useState(false)
    const [regionForm, setRegionForm] = useState(false)


useEffect(
    () => {
DisplayPreview()
    },[newVarietalRegion]
)
    const DisplayPreview =() => {
        if( newVarietalRegion.varietalId) {
            getVarietalById(newVarietalRegion.varietalId)
            .then((varietal) => {
               setDisplayVarietal (<>
                <div className="text-center text-2xl text-secondary font-semibold">{varietal.name}</div>
                <img className="mx-auto w-auto h-3/5 object-cover p-6" src={varietal.image}/>
                </>)
            })
            setIsLoading(false)
        }
        if( newVarietalRegion.regionId) {
            getRegionsById(newVarietalRegion.regionId)
            .then((region) => {
               setDisplayRegion (<>
                <div>{region.location}, {region.country}</div>
                </>)
            })
        }
        if( newVarietalRegion.bodyId) {
            getBodiesById(newVarietalRegion.bodyId)
            .then((body) => {
                setDisplayBody
               (<>
                <div className="badge">{body.density}</div>
                </>)
            })
        }
        if( newVarietalRegion.acidityId) {
            getAcidityById(newVarietalRegion.acidityId)
            .then((acidity) => {
                setDisplayAcidity
               (<>
                <div className="badge">{acidity.style}</div>
                </>)
            })
        }
        if( newVarietalRegion.drynessId) {
            getDrynessById(newVarietalRegion.drynessId)
            .then((dryness) => {
                setDisplayDryness
               (<>
                <div className="badge">{dryness.level}</div>
                </>)
            })
        }
    }


    useEffect(() => {
            getVarietals() .then((data) => setVarietals(data))
            getRegions().then((data) => setRegions(data))
            getBodies() .then((data) => setBody(data))
            getAcidities() .then((data) => setAcidity(data))
            getDrynesses().then((data) => setDryness(data))
        }, []
    )
  
    const handleSaveButton = (event) => {
        event.preventDefault()
if (newVarietalRegion.regionId && newVarietalRegion.varietalId && newVarietalRegion.bodyId && newVarietalRegion.acidityId && newVarietalRegion.drynessId) 
{
    createNewVarietalRegion(newVarietalRegion)
            .then(() => {
                navigate("/somm")
            })
}
else {
    window.alert("Please select all fields.")
}
      
    }
    const HandleVarietalForm = (event) => {
        event.preventDefault()
        setVarietalForm(true)
    }
    const HandleVarietalFormClose =(event) => {
        event.preventDefault()
        setVarietalForm(false)
        getVarietals()
        .then((data) => {
         setVarietals(data)
    })}
    const HandleRegionForm = (event) => {
        event.preventDefault()
        setRegionForm(true)
    }
    const HandleRegionFormClose =(event) => {
        event.preventDefault()
        setRegionForm(false)
        getRegions()
        .then((data) => {
         setRegions(data)
    })}


    return <>
    <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/somm")}>Back to Mad Hatter</button></div>
     <h2 className="text-center p-6 text-secondary font-semibold text-4xl">New Varietal Region</h2>
       <div className="w-full h-screen flex row px-10  ">
        <form className="text-center w-full p-6 md:w-1/2 h-3/4 mx-auto my-10 border-primary border-2 md:p-16 ">
            
            <fieldset className="p-1 pt-4 flex row justify-start gap-10">
           
                    <select className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        id="varietal"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.varietalId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option className="" name="varietal"> Choose a varietal...</option>
                        {varietals.map(
                            (varietal) => {
                                return (<option
                                key={varietal.id}
                                    value={varietal.id}>

                                    {varietal.name} </option>)
                            }
                        )}
                    </select>
                    <button
                    onClick={(evt) => HandleVarietalForm(evt) }
                    >+ New Varietal</button>
            </fieldset>
            {varietalForm ? <VarietalForm HandleVarietalFormClose={HandleVarietalFormClose} />
            : ""}
            <fieldset className="p-1 pt-4 flex row justify-start gap-10">
                
                    <select
                    className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        id="region"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.regionId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="region"> Choose wine region...</option>
                        {regions.map(
                            (region) => {
                                return (<option
                                key={region.id}
                                    value={region.id}>

                                    {region.location}, {region.country} </option>)
                            }
                        )}
                    </select>
                    <button
                     onClick={(evt) => HandleRegionForm(evt)}
                    >+ New Region</button>
                
            </fieldset>
            {regionForm ? <RegionForm HandleRegionFormClose={HandleRegionFormClose} />
            : ""}
            <fieldset className="p-1 pt-4 ">
                
                    <select
                        className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        id="body"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.bodyId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="body"> Choose body type</option>
                        {bodies.map(
                            (body) => {
                                return (<option
                                key={body.id}
                                    value={body.id}>

                                    {body.density} </option>)
                            }
                        )}
                    </select>
                
            </fieldset>
            <fieldset className="p-1 pt-4">
                
                    <select
                    className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        id="dryness"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.drynessId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="dryness"> Choose dryness level...</option>
                        {drynesses.map(
                            (dryness) => {
                                return (<option
                                key={dryness.id}
                                    value={dryness.id}>

                                    {dryness.level} </option>)
                            }
                        )}
                    </select>
                
            </fieldset>
            <fieldset className="p-1 pt-4 ">
                
                    <select
                    className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        id="acidity"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.acidityId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="acidity"> Choose acid level...</option>
                        {acidities.map(
                            (acidity) => {
                                return (<option
                                key={acidity.id}
                                    value={acidity.id}>

                                    {acidity.style} </option>)
                            }
                        )}
                    </select>
                
            </fieldset>
            <button className="btn bg-secondary mt-6" onClick={(clickEvent) => handleSaveButton(clickEvent)}>Create New Varietal Region</button>
        
        </form>
{isLoading ? "" 
: <div className="text-center w-1/5 h-1/2 mx-auto my-10 p-2 ml-5 ">
    {newVarietalRegion ? displayVarietalHTML
: "" }
 {newVarietalRegion ? displayRegionHTML
: "" }
{newVarietalRegion ? displayBodyHTML
: "" }
{newVarietalRegion ? displayDrynessHTML
: "" }
{newVarietalRegion ? displayAcidityHTML
: "" }
</div> }

</div>
    </>
}