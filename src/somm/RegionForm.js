import { useState } from "react"
import { createRegion } from "./SommProvider"

export const RegionForm = ({ HandleRegionFormClose }) => {
    const [region, setRegion] = useState({})

    const HandleClickSaveRegion = (event) => {
        event.preventDefault()
        if (region.location && region.country) {
            createRegion(region)
                .then(() => {
                    HandleRegionFormClose(event)
                })
        }
        else {
            window.alert("Please fill in both fields")
        }
    }

    return (<>
        <div className="fixed inset-0 z-20  backdrop-blur-sm ">
        <form className=" bg-white w-4/5 h-3/4 md:w-1/2 md:h-2/3 mx-auto my-10 rounded-lg border-secondary border-2 p-10   ">
                <div className="flex row justify-between">
                    <h2 className="text-3xl font-semibold text-right">New Region</h2>
                    <button type="button" className="text-right text-2xl" onClick={(event) => HandleRegionFormClose(event)}>X</button>
                </div>
                <div className="flex flex-col h-full pt-0 p-4 items-center md:p-6">
                    <div className="flex flex-col justify-evenly items-center h-full text-secondary">
                        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
                            <label className="w-1/2">New Region Location</label>
                            <input onChange={(evt) => {
                                const copy = { ...region }
                                copy.location = evt.target.value
                                setRegion(copy)
                            }}
                                className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                name="location" id="location" type="text" placeholder=" e.g. Rioja or Chablis" />
                        </fieldset>
                        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
                            <label className="w-1/2">Country of Region</label>
                            <input
                                onChange={(evt) => {
                                    const copy = { ...region }
                                    copy.country = evt.target.value
                                    setRegion(copy)
                                }}
                                className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                name="country" id="country" type="text" placeholder=" e.g. Spain or France" />
                        </fieldset>
                        <fieldset className="p-1 pt-4 flex row justify-start gap-14">
                            <label className="w-1/2">City for Map</label>
                            <input
                                onChange={(evt) => {
                                    const copy = { ...region }
                                    copy.geoCodeCity = evt.target.value
                                    setRegion(copy)
                                }}
                                className="block py-2.5 px-0 w-1/2text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                name="geoCodeCity" id="country" type="text" placeholder=" e.g. Madrid or Paris" />
                        </fieldset>
                    </div>
                    <div className="mx-auto my-auto ">
                        <button className="btn bg-secondary " onClick={(clickEvent) => HandleClickSaveRegion(clickEvent)}>Add Region</button>
                    </div>
                </div>
            </form>
            <div>
            </div>
        </div>
    </>)
}