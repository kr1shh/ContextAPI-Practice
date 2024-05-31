import { useContext } from "react"
import UserContext from "../context/UserContexct"


const Profile = () => {

    const { user } = useContext(UserContext)

    if(!user){
        return <h1>No User</h1>
    }else{
        return <h1 className="font-sans text-4xl">{user}</h1>
    }
}

export default Profile