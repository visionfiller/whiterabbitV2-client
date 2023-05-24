import { useEffect, useState } from "react"
import { getWineTypes } from "../library/LibraryProvider"
import { createVarietal } from "./SommProvider"

export const VarietalForm = ({ HandleVarietalFormClose }) => {
    const [varietal, setVarietal] = useState({})
    const [wineTypes, setWineTypes] = useState([])

    useEffect(() => {
        getWineTypes()
            .then((data) => {
                setWineTypes(data)
            })
    }, []
    )

    const HandleClickSaveVarietal = (event) => {
        event.preventDefault()
        if (varietal.image && varietal.name && varietal.description && varietal.wine_type) {
            createVarietal(varietal)
                .then(() => {
                    HandleVarietalFormClose(event)
                })
        }
        else {
            window.alert("Please fill in all fields")
        }
    }

    return (<>
        <div className="fixed inset-0 z-20  backdrop-blur-sm ">
            <form className=" bg-white w-4/5 h-3/4 md:w-1/2 md:h-2/3 mx-auto my-10 rounded-lg border-secondary border-2 p-10   ">
                <div className="flex row justify-between">
                    <h2 className="text-3xl font-semibold text-right">New Varietal</h2>
                    <button type="button" className="text-right text-2xl" onClick={(event) => HandleVarietalFormClose(event)}>X</button>
                </div>
                <div className="flex flex-col  h-full pt-0 p-2 md:p-6">
                    <div className="flex flex-col justify-evenly items-start h-full text-secondary">
                        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
                            <label>Name</label>
                            <input onChange={(evt) => {
                                const copy = { ...varietal }
                                copy.name = evt.target.value
                                setVarietal(copy)
                            }}
                                className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                name="name" id="name" type="text" placeholder=" e.g. Chardonnay or Pinot Noir" />
                        </fieldset>
                        <fieldset className="p-1 pt-4 flex row justify-start">
                            <label className=" text-left">Upload an Image</label>
                            <input onChange={(evt) => {
                                const copy = { ...varietal }
                                copy.image = evt.target.value
                                setVarietal(copy)
                            }}
                                type="text"
                                className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                name="image" id="image" placeholder=" e.g a jpeg or png file" />
                        </fieldset>
                        <fieldset className="p-1 pt-4 flex flex-col md:flex-row justify-start gap-5">
                            <label>Description</label>
                            <textarea
                                onChange={(evt) => {
                                    const copy = { ...varietal }
                                    copy.description = evt.target.value
                                    setVarietal(copy)
                                }}
                                className="textarea textarea-bordered"
                                name="description" id="description" placeholder="Tell us all about this varietal" />
                        </fieldset>
                        <fieldset className="p-1 pt-4 flex row justify-start gap-10">
                            <label className="w-1/4">Wine Type</label>
                            <select
                                className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                onChange={(evt) => {
                                    const copy = { ...varietal }
                                    copy.wine_type = parseInt(evt.target.value)
                                    setVarietal(copy)
                                }}>
                                <option value="0">Select</option>
                                {wineTypes.map((type) => {
                                    return <option id={type.id} value={type.id}>{type.type}</option>
                                })}
                            </select>
                        </fieldset>
                    </div>
                    <div className="mx-auto my-auto ">
                        <button className="btn bg-secondary " onClick={(clickEvent) => HandleClickSaveVarietal(clickEvent)}>Add Varietal</button>
                    </div>
                </div>
            </form>
            <div>
            </div>
        </div>
    </>)
}