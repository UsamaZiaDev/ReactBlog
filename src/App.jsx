import { useEffect, useState } from "react"
import authService from "./appwrite/auth"
import { useDispatch } from "react-redux"

import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components"



function App() {

  const [loading, setLoading] = useState(false)
  const distpatch = useDispatch()

    useEffect( () => {
      
      authService.getCurrentUser()
      .then(userData => {
          if(userData){
            distpatch( login({userData}) )
          }
          else{
            distpatch(logout())
          }
      })
      .catch(err => console.log("App_authService_getCurrentUser_Error__"))
      .finally(()=> setLoading(false));

    },[])


  return !loading ? (
      <div>
        <Header/>
          <main>
            body content...
          </main>
        <Footer/>
      </div>
   ) : null;
  





}

export default App
