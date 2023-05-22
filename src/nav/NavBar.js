import { Link, useNavigate } from "react-router-dom"
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"

export const NavBar = (token, setToken) => {
	if (token.is_staff) {
		return <EmployeeNav token={token} setToken={setToken} />
	}
	else {
		return <CustomerNav  token={token} setToken={setToken}/>
	}
}


