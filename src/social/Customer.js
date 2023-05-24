import { Link } from "react-router-dom"

export const Customer = ({customer}) => {
    return(
   
        <Link className="text-secondary card h-72 w-96 rounded-lg  m-2 " to={`/social/details/${customer.user}`}>
        <div className="card-body w-96 ">
        <div className="card-title text-4xl text-white w-96 bg-primary absolute top-64 left-0"> <span className="mx-auto">{customer.full_name}</span></div>
        </div>
        {customer.profilePicture === "Emily" ? <img className="h-full w-96 object-cover border-2 border-primary rounded-lg"src="https://www.disneyclips.com/imagesnewb/images/whiterabbit2.gif"/>
        : <img className="h-full w-96 object-cover border-2 border-primary rounded-lg"src={customer?.profile_picture}/>
     }
        </Link>
            )
}

