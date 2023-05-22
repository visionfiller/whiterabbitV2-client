import { useEffect, useState } from "react"
import { LibraryCard } from "./LibraryCard"
import { getAllFavorites, getRegions, getVarietalRegions, getVarietalRegionsToPaginate, getWineTypes } from "./LibraryProvider"

export const Library = () => {
    const [varietalRegions, setVarietalRegions] = useState([])

    const [filteredWines, setFilteredWines] = useState([])
    const [wineTypeId, setWineTypeId] = useState("")
    const [wineTypes, setWineTypes] = useState([])
    const [sorted, setSorted] = useState("")
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [curPage, setCurPage] = useState(1);
    const [errorMsg, setErrorMsg] = useState("");
    const [showFavorites, setShowFavorites] = useState(false)
    const [showMyFavorites, setShowMyFavorites] = useState(false)
    const [favorites, setFavorites] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

useEffect(()=>{
    getVarietalRegions().then((data)=>setVarietalRegions(data))
})
    // useEffect(() => {
    //     setLoading(true)
    //     getVarietalRegionsToPaginate(curPage)
    //         .then((res) => {
    //             setHasMore(res.length > 0);
    //             setVarietalRegions((data) => [...data, ...res])
    //             setErrorMsg("");
    //         })
    //         .catch((err) => {
    //             // set the error msg
    //             setErrorMsg("Something went wrong, Please try again later");
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, [curPage]
    // )
    useEffect(
        () => {
            getWineTypes()
                .then((data) => {
                    setWineTypes(data)
                })
            // getAllFavorites()
            //     .then((data) => {
            //         setFavorites(data)
                // })

        }, []
    )
    useEffect(() => {
        let varietalRegionsFiltered = [...varietalRegions]
        if (wineTypeId) { varietalRegionsFiltered = varietalRegionsFiltered.filter(varietal => varietal.varietal?.wineTypeId === wineTypeId) }
        if (sorted === "body") { varietalRegionsFiltered = varietalRegionsFiltered.sort((a, b) => b.bodyId - a.bodyId) }
        if (sorted === "acidity") { varietalRegionsFiltered = varietalRegionsFiltered.sort((a, b) => a.acidityId - b.acidityId) }
        if (sorted === "dryness") { varietalRegionsFiltered = varietalRegionsFiltered.sort((a, b) => a.drynessId - b.drynessId) }
        if (showFavorites) { varietalRegionsFiltered = varietalRegionsFiltered.filter(varietal => favorites.find((favorite) => favorite.varietalRegionId === varietal.id)) }
        if (showMyFavorites) { varietalRegionsFiltered = varietalRegionsFiltered.filter(varietal => favorites.find((favorite) => favorite.varietalRegionId === varietal.id && favorite.userId === rabbitUserObject.id)) }
        setFilteredWines(varietalRegionsFiltered)
    },
        [varietalRegions, wineTypeId, sorted, showFavorites, showMyFavorites]
    )


    // const loadMoreOnClick = () => {
    //     // prevent click if the state is loading
    //     if (loading) return;
    //     setCurPage((prev) => prev + 1);
    // };

    const CreateList = () => {
        return filteredWines.map(wine => <LibraryCard key={wine.id} wine={wine} />)

    }
    // const HandleShowFavorites = (event) => {
    //     event.preventDefault()
    //     setShowFavorites(event.target.checked)
    // }
    // const HandleShowMyFavorites = (event) => {
    //     event.preventDefault()
    //     setShowMyFavorites(event.target.checked)
    // }

    return <>
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">The Library</h2>
        <div className="p-2 md:p-1 flex row flex-wrap w-full fixed md:static  bottom-0 justify-evenly  md:justify-between md:px-10 md:items-center bg-primary text-white rounded-sm ">
            <div id="typeFilter" className="m-2">

                <select className="text-black rounded-lg"
                    onChange={(evt) => { setWineTypeId(parseInt(evt.target.value)) }}>
                    <option className="" value="">All Wines</option>
                    {wineTypes.map((type) => {
                        return <option key={type.id} value={type.id} id={type.id}>{type.type}</option>
                    })}
                </select>
            </div>
            <div id="sortFilters" className="m-2">

                <select
                    className="text-black rounded-lg"
                    onChange={(evt) => { setSorted(evt.target.value) }}>
                    <option key="none" id="none" value="none">Sort by Ascending</option>
                    <option key="body" id="Body" value="body">Body</option>
                    <option key="acidity" id="Acidity" value="acidity">Acidity</option>
                    <option key="dryness" id="Dryness" value="dryness">Dryness</option>
                </select>
            </div>
            {/* {rabbitUserObject.staff ? ""
            : <div className="flex row gap-5 items-center">
            <div id="favorites" className="flex row gap-2 p-1">
                <label>Show everyone's favorites</label>
                <input className="text-primary focus:ring-primary"type="checkbox" checked={showFavorites} onChange={(evt) => { HandleShowFavorites(evt) }
                } />
            </div>
            <div className="flex row gap-2">
                <label>Only show my favorites</label>
                <input className="text-primary focus:ring-primary" type="checkbox" checked={showMyFavorites} onChange={(evt) => { HandleShowMyFavorites(evt) }} />

            </div>
            </div>} */}
        </div>
  
        <div className="flex flex-col items-center w-full pb-24 -z-10 absolute md:static md:grid md:grid-cols-5">
            {CreateList()}
            {/* <div className="text-center   ">
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            {hasMore && (
                <button className=" loading-more-btn btn bg-secondary hover:bg-primary hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" onClick={loadMoreOnClick}>
                    {loading ? "Loading..." : "Load More"}
                </button>
            )}

        </div> */}
        </div>
       
    </>
}