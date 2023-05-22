import { Route, Routes } from "react-router-dom"
import { Authorized } from "./auth/Authorized";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./views/ApplicationViews";
import './index.css';
import { useState } from "react";

export const WhiteRabbit = () => {
	const [token, setTokenState] = useState(localStorage.getItem('rabbit_user'))
	
  
	const setToken = (auth_token, user_id, is_staff) => {
	let token = {
		"auth_token": auth_token,
		"user_id": user_id,
		"is_staff": is_staff
	}
	
	localStorage.setItem('rabbit_user', JSON.stringify(token))
	//   localStorage.setItem('auth_token', newToken)
	//   localStorage.setItem('user_id', user_id)
	//   localStorage.setItem('is_staff', is_staff)
	//   setTokenState(newToken)
	//   setUserId(user_id)
	//   setIsStaff(is_staff)
	setTokenState(token)
	}
  
	return <>
	<Routes>
    <Route path="/login" element={<Login setToken={setToken} />} />
    <Route path="/register" element={<Register setToken={setToken} />} />
	  
	<Route path="*" element={
	<Authorized token={token}>
	<NavBar token={token}/>
    <ApplicationViews token={token} setToken={setToken}/>
</Authorized>}/>
</Routes>
  </>

}
		
		            
			
			