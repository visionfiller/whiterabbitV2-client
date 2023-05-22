export const LikeItSearchBar = ({ setterFunctionVarietal, setterFunctionRegion }) => {
    return (<>
        <div className="form-control w-full max-w-xs ml-auto mr-auto p-10 ">
            <div className="">
            <label className="label label-text text-2xl font-bold text-secondary">What is the grape?</label>
            <input
                className="input input-bordered w-full max-w-xs"
                onChange={(changeEvent) => { setterFunctionVarietal(changeEvent.target.value) }}
                type="text" placeholder="e.g. Viognier " />
                </div>
                <div>
            <label className="label label-text text-2xl font-bold text-secondary">Country of origin?</label>
            <input
                className="input input-bordered w-full max-w-xs"
                onChange={(changeEvent) => { setterFunctionRegion(changeEvent.target.value) }}
                type="text" placeholder="e.g. France" />
                </div>
        </div>
    </>)

}