import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UploadWidget } from "../cloudinary/UploadWidget"


import { getCustomerById, updateCustomer } from "./SocialProvider"


export const UpdateProfile = () => {
    const[user, updateUser] = useState({})
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const [url, setURL] = useState("")
    const [error, updateError] = useState("");
    const [profilePicture, setProfilePicture] =useState(<></>)
   
    useEffect( () => {
            if(rabbitUserObject){ 
            getCustomerById(rabbitUserObject.id)
            .then((data) => {
                updateUser(data)
            })
            setIsLoading(false)
        }
        else{setIsLoading(false)}
        },[]
    )
    
const HandleControlledInputChange = (event) => {
    const newUser = {...user}
    newUser[event.target.name] = event.target.value
    updateUser(newUser)
}

function handleOnUpload(error, result, widget) {
    if ( error ) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    setURL(result?.info?.secure_url)
   
  }

  useEffect(
    () => {
        if(url !== ""){
            const copy = {...user}
            copy.profilePicture = url
            updateUser(copy)
           
            
            }


    },[url]
  )

const HandleSaveButton = () => {
    setIsLoading(true)
    if(rabbitUserObject) {
        updateCustomer({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            profilePicture: url,
            isStaff: false
    
        })
        .then(()=> navigate(`/social`))
    }
    
    
    }

  
    
return(<>
<div className="w-full h-screen ">
<div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/social")}>Back to WR Community</button></div>
        <form className="text-center md:w-1/2 h-auto mx-auto my-10 border-black border-2 p-10 ">
            <h2 className="text-center text-2xl text-secondary font-semibold">Update your profile</h2>
<fieldset className=" p-4 mx-auto flex row">
                <label className= "mx-auto" htmlFor="fullName">Name</label>
                    <input onChange={HandleControlledInputChange}
                           type="text" id="fullName" className="form-control input input-bordered input-md"
                           defaultValue={user.fullName} name="fullName" required autoFocus />
                          
                          
                </fieldset>
                <fieldset className="p-4 mx-auto flex row">
                <label className="mx-auto" htmlFor="inputEmail">Email</label>
                    <input onChange={HandleControlledInputChange}
                        type="email" id="email" className="input input-bordered input-md"
                        defaultValue={user.email} name="email" required />
                        
                </fieldset>
                <fieldset className="p-4 mx-auto flex row">
                <label className="mx-auto" htmlFor="password">Password</label>
                    <input onChange={HandleControlledInputChange}
                        defaultValue={user.password}
                        type="text" id="password" className="input input-bordered input-md"
                        placeholder="new password" name="password"required />
                    
                </fieldset>

                <fieldset className="p-4 mx-auto flex row justify-evenly items-center">
                {user.profilePicture && url === "" ? <img className="h-1/3 w-1/3" src={user.profilePicture}/>
                :  <img className="h-1/3 w-1/3" src={url}/>}
                
                <UploadWidget onUpload={handleOnUpload}/>
               

       
                    {/* <input 
                onChange={HandleControlledInputChange}
                      defaultValue={user.profilePicture}
                        type="text"id="profilePicture" className="input input-bordered input-md"
                        placeholder="URL" name="profilePicture"required />
                        */}

                </fieldset>
                <button className="btn bg-secondary m-4" disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            HandleSaveButton()
          }}>
               Submit Changes to Profile
            </button>

</form>
</div>
</>)
}