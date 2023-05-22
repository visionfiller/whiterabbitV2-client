import { useEffect, useState } from "react"
import { Gallery } from "./Gallery"
import { SearchedVarietalRegionList } from "./SearchList"
import { WineSearch } from "./WineSearch"

export const SearchedContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const [gallery, setGallery] = useState(true)

useEffect(
() => {
    if(searchTerms !== ""){
    setGallery(false)
    }
    else{setGallery(true)}
},[searchTerms]
)





    return (
        <>
       
        <div className=" w-full h-3/4 mx-auto flex flex-col lg:flex-row">
        <div className=" p-10 my-auto ">
        {gallery? <h2 className="text-center text-6xl text-secondary lg:text-8xl lg:text-left  lg:p-10">Let's talk wine!</h2>
        : "" }
        <WineSearch setterFunction={setSearchTerms}/> 
        </div>
        {gallery ? <Gallery />
        : <SearchedVarietalRegionList searchTermState={searchTerms} /> 
        
        }
        </div>
    </>
    )
    
    }