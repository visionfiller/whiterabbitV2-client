import { Link } from "react-router-dom"

export const WineList =({wineBottles, varietalRegions,findVarietal, findRegion, openInNewTab, HandleWineClose})=> {



    return(
        <div className="fixed inset-0 z-20  backdrop-blur-sm ">
           
    <div className="w-full h-full md:w-3/4 md:h-3/4 my-10 mx-auto bg-white border-2 border-secondary overflow-y-auto scroll-smooth ">
    <div className="text-right text-2xl p-2">
        <button type="button" className="font-semibold" onClick={(event) => HandleWineClose(event)}>X</button>
        </div>
    <h2 className="pb-6 text-3xl text-center font-bold leading-none text-secondary dark:text-white">Wines In Our Cellar</h2>
    <div className="grid grid-cols-2 w-full ">

    {wineBottles.map((bottle) => {
        return  <Link key={bottle.id} className="flex row items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700" href="#" onClick = {() => openInNewTab(bottle?.link)}><figure key={bottle.id} className="">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    <div key={bottle?.id} className="text-lg font-semibold text-gray-900 dark:text-white">{bottle.name}</div>
    
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
        <img className="rounded-full w-12 h-12 object-contain" src={bottle.image} alt="wine bottle"/>
        <div className="space-y-0.5 font-medium dark:text-white text-left">
        <div className="my-4 font-light">{varietalRegions.length ? findVarietal(bottle)
    : ""}</div>
     <div className="text-sm font-light text-gray-500 dark:text-gray-400">{varietalRegions.length ? findRegion(bottle)
            : ""}</div>
            
        </div>
    </figcaption>    
</figure>
</Link>
})
 

    }
    

    
    
        </div>
    </div>
    </div>
    )
}