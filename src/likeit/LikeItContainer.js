import { useEffect, useState } from "react"
import { LikeItSearchBar } from "./LikeItSearch"
import { LikeItSearchedList } from "./LikeItSearchList"

export const WillILikeItSearchContainer = () => {
    const [searchTermsVarietal, setSearchTermsVarietal] = useState("")
    const [searchTermsRegion, setSearchTermsRegion] = useState("")
    const [header, setHeader] = useState(true)

useEffect(
    () => {
        if (searchTermsVarietal !== ""){
            setHeader(true)
        }
        else{setHeader(true)}

    },[searchTermsVarietal]
)


    return (<>
        <div className="flex flex-col md:flex-row">
            {header ?  <div className=" md:w-1/2 flex flex-col">
            <h2 className="my-auto text-center md:text-right p-10 md:p-24  text-secondary font-semibold text-6xl">Will I Like This Wine?</h2>
            <img className="w-1/4 h-auto absolute top-36 left-0  opacity-0 transform hover:opacity-60 transition ease-out duration-1000"src="https://th.bing.com/th/id/R.cc76a71d4e3c993987364ac9d114a639?rik=25gVbAE168sn%2bA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f6%2fCheshire-Cat-PNG-Photos.png&ehk=W3yh9%2flkVa%2b6dHrIpCuiJ6vWi8%2bs9%2fsPNG1cvy4EbNk%3d&risl=&pid=ImgRaw&r=0"/>
            
            </div>
                : ""}
        <div className="flex flex-col md:flex md:flex-row p-16 md:p-36 ">
            <LikeItSearchBar
                setterFunctionVarietal={setSearchTermsVarietal}
                setterFunctionRegion={setSearchTermsRegion} />
            {searchTermsVarietal.length && searchTermsRegion.length ?
                <LikeItSearchedList
                    searchTermStateVarietal={searchTermsVarietal}
                    searchTermStateRegion={searchTermsRegion} />
                : ""}
        </div>
        </div>
    </>)
}