import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCustomer } from "../cellar/CellarProvider"

import { UploadWidget } from "../cloudinary/UploadWidget"


import {  getUser, updateCustomer, updateUser } from "./SocialProvider"


export const UpdateProfile = () => {
    const[user, setUser] = useState({
        id: 0,
        first_name:  "",
        last_name: "",
        username: "",
        email: "",
        password: ""


    })
    const [customer, setCustomer] =useState(
        {
            user: 0,
            full_name: "",
            profile_picture: ""}
    )
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const [url, setURL] = useState("")
    const [error, updateError] = useState("");
   
    useEffect( () => {
            if(rabbitUserObject){ 
            getUser(rabbitUserObject.user_id).then((data) => {setUser(data)})
            getCustomer(rabbitUserObject.user_id).then((data)=> setCustomer(data))
            setIsLoading(false)
        }
        else{setIsLoading(false)}
        },[]
    )
    
const HandleControlledInputChangeUser = (event) => {
    const newUser = {...user}
    newUser[event.target.name] = event.target.value
    setUser(newUser)
}
const HandleControlledInputChangeCustomer = (url) => {
    const newCustomer = {...customer}
    newCustomer.profile_picture = url
    setCustomer(newCustomer)
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
            HandleControlledInputChangeCustomer(url)
            
            }


    },[url]
  )

const HandleSaveButton = () => {
    setIsLoading(true)
    if(rabbitUserObject) {
        updateUser(user.id,{
            
            first_name: user.first_name,
            last_name:user.last_name,
            username: user.username,
            email: user.email,
            password: user.password,
            isStaff: false
    
        })
        updateCustomer(user.id,{
            profile_picture: url
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
                <label className= "mx-auto" htmlFor="fullName">First Name</label>
                    <input onChange={HandleControlledInputChangeUser}
                           type="text" id="fullName" className="form-control input input-bordered input-md"
                           value={user.first_name} name="first_name" required autoFocus />
                        
                </fieldset>
                <fieldset className=" p-4 mx-auto flex row">
                <label className= "mx-auto" htmlFor="fullName">Last Name</label>
                    <input onChange={HandleControlledInputChangeUser}
                           type="text" id="fullName" className="form-control input input-bordered input-md"
                           value={user.last_name} name="last_name" required autoFocus />
                        
                </fieldset>
                <fieldset className=" p-4 mx-auto flex row">
                <label className= "mx-auto" htmlFor="fullName">Username</label>
                    <input onChange={HandleControlledInputChangeUser}
                           type="text" id="username" className="form-control input input-bordered input-md"
                           value={user.username} name="username" required autoFocus />
                        
                </fieldset>
                <fieldset className="p-4 mx-auto flex row">
                <label className="mx-auto" htmlFor="inputEmail">Email</label>
                    <input onChange={HandleControlledInputChangeUser}
                        type="email" id="email" className="input input-bordered input-md"
                        value={user.email} name="email" required />
                        
                </fieldset>
                <fieldset className="p-4 mx-auto flex row">
                <label className="mx-auto" htmlFor="password">Password</label>
                    <input onChange={HandleControlledInputChangeUser}
                        value={user.password}
                        type="text" id="password" className="input input-bordered input-md"
                        placeholder="new password" name="password"required />
                    
                </fieldset>

                <fieldset className="p-4 mx-auto flex row justify-evenly items-center">
                {customer.profile_picture && url === "" ? <img className="h-1/3 w-1/3" src={customer.profile_picture}/>
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