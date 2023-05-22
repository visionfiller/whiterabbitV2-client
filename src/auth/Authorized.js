import { Navigate, Outlet } from "react-router-dom"

export const Authorized = ({ children }) => {
  if (localStorage.getItem("rabbit_user")) {
    return children
  }
  return <Navigate to='/login'  />
}
