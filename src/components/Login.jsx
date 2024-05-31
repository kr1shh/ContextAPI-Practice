import { useState } from "react"
import { useContext } from "react"
import UserContext from "../context/UserContexct"

const Login = () => {
    const [ username,setUsername ] = useState("")

    const { setUser } = useContext(UserContext)


  return (
    <>
        <div>
            <input 
            className="focus:outline-none border border-black p-2 mr-4 rounded-lg"
            type="text" 
            placeholder="Enter Username"
            onChange={ (e)=> setUsername( e.target.value ) }
            value={ username }/>
            <button
            className="p-3 bg-gray-500 text-white rounded-lg"
            type="submit"
            onClick={ ()=> setUser( username ) }>
                Show
            </button>
        </div>
    </>
  )
}

export default Login