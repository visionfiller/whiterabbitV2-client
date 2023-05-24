
import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../home/Home"
import { CustomerNav } from "../nav/CustomerNav"
import { EmployeeNav } from "../nav/EmployeeNav"
import { CustomerViews } from "./CustomerView"
import { EmployeeViews } from "./EmployeeView"



export const ApplicationViews = ({ token, setToken }) => {
	const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
	if (rabbitUserObject.is_staff) {
		return<>
		
		 <EmployeeViews token={token} setToken={setToken} />
		 </>
	}
	else {
		return <>
		
		<CustomerViews token={token} setToken={setToken}/>
		</>
	}
}