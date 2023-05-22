export const WineSearch = ({ setterFunction }) => {
    return (
        <div className="form-control w-full max-w-xs ml-auto mr-auto pt-10 pb-10">
            <label className="label label-text text-primary font-semibold text-lg">Search by grape, country, or region</label>
            <input 
            className="input input-bordered w-full max-w-xs"
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            type="text" placeholder="e.g. France, Oregon, or Pinot"/>
        </div>
    )
    
    }