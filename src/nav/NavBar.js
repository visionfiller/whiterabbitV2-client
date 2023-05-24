import { Link, useNavigate } from "react-router-dom"
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"

export const NavBar = ({token, setToken}) => {
	const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
	if (rabbitUserObject.is_staff) {
		return <EmployeeNav user={rabbitUserObject} setToken={setToken} />
	}
	else {
		return <CustomerNav  user={rabbitUserObject} setToken={setToken}/>
	}
}


