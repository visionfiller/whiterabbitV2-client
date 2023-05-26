import { useEffect, useState } from "react"
import { getVarietalRegions } from "../library/LibraryProvider"
import { deleteFavorite, getFavorites, unFavorite } from "./CellarProvider"

export const WineCellar =({ getCustomerFavorites, rabbitUserObject, favorites}) => {
const handleDelete = (id) => {
  unFavorite(id).then(()=> getCustomerFavorites())
}
 
 
return (<>
    <div className="w-full mr-auto ml-auto h-full m-8 ">
    <div className="carousel carousel-center p-6 gap-10 h-full bg-third border-b-4 border-primary">
   {favorites?.map((wine) => {
    return  <div key={wine.id} className="static card carousel-item w-64 h-64 rounded-sm bg-slate-100 shadow-inner p-4 m-2">
    <div className="text-center text-secondary font-semibold">{wine?.region?.location} {wine.varietal?.name}</div>
    <div className="text-sm text-secondary text-center m-1">{wine?.region?.country}</div>
    <img className="h-3/5 object-cover"src={wine?.varietal?.image}/>
   <button className="p-4 mx-auto" onClick={()=> handleDelete(wine.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg></button>
    </div>
    
   })}
   </div>
   </div>
    </>
)
}
