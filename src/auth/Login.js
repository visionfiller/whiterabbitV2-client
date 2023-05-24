import React, { useEffect, useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { LoginVideo } from "./LoginVideo";
import { getUserByEmailAndPassword, loginUser } from "./UserProvider";

export const Login = ({setToken}) => {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [video, setVideo] = useState(false)
    const [isUnsuccessful, setisUnsuccessful] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
    
        const user = {
          username: username.current.value,
          password: password.current.value
        }
    
        loginUser(user).then(res => {
          // console.log(res)
          if ("valid" in res && res.valid) {
            setToken(res.auth_token, res.user_id, res.is_staff)
    
            if (res.is_staff) {
                setVideo(false)
                navigate("/somm")
            }
            else { setVideo(true) }
           
          }
          else {
            setisUnsuccessful(true)
          }
        })
      }
   

   



    const HandleClose = () => {
        setVideo(false)
        navigate("/home")
    }
    return (<>
         <div className="bg-cover fixed blur w-screen h-screen bg-[url('https://th.bing.com/th/id/R.8a3385dee3d63c5dd977705abf4cad84?rik=NaXhHe9JUTk9Zw&riu=http%3a%2f%2fwp.production.patheos.com%2fblogs%2funcommongodcommongood%2ffiles%2f2014%2f07%2fiStock_000036147510Small.jpg&ehk=N5mDs7Sa8pDyw5lExQhvswZwotK290GhnV9dVlS9Wh0%3d&risl=&pid=ImgRaw&r=0')]">
            </div>
     
            <div className="pt-48 md:grid grid-cols-3 sm:flex flex-col">
            <div></div>
            <div className="w-1/2"></div>
            <div className="p-10 w-full">
            <span className="text-8xl text-white lowercase opacity-80 w-full" >White Rabbit.</span>
            <section className="w-full h-full relative">
                <form className="m-auto form-control text-center" onSubmit={handleLogin}>
                    <fieldset className=" pt-4 flex row justify-evenly items-center">
                    <label className="text-white text-lg" >username</label>
                            <input type="text"
                                ref={username}
                                className="block py-2.5 px-0 w-1/2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                placeholder=""
                                required autoFocus />
                           
                          
                    </fieldset>
                    <fieldset className="p-1 pt-4 flex row justify-evenly items-center ">
                    
                    <label className="text-white text-lg" >password</label>
                            <input type="password"
                               ref={password}
                                className="block py-2.5 px-0 w-1/2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                placeholder=""
                                required autoFocus />
                          
                    </fieldset>
                    <fieldset className="pt-8 flex row  items-center justify-evenly gap-10">
                        <button className="btn  bg-secondary" type="submit">
                            Sign in
                        </button>
                        <Link className="inline-block text-white" to="/register">Is this your first visit?</Link>
                    </fieldset>
                </form>
            </section>
            </div>
            </div>
            {video ? <LoginVideo HandleClose={HandleClose} />
                : ""}
                
        
        </>
    )
}

