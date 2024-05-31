import Login from "./components/Login"
import Profile from "./components/Profile"
function App(){
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center flex-col gap-6">
      <Login></Login>
      <Profile></Profile>
    </div>
    </>
  )
}

export default App
