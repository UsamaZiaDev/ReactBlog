import {useNavigate} from 'react-router-dom'
import authService from "../appwrite/auth"
import { logout } from "../store/authSlice"



const LogoutBtn = ( {
                    children, 
                    text, 
                    className, 
                    bg='primary',
                     ...props
        } ) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = ()=>{
    authService.logout()
    .then((res)=>dispatch(logout()))
    .catch((err)=>console.log("Error__logoutHandler__"))
    
  }


                  return (
                    <button 
                        type="button" className={` btn btn-${bg} ${className} text-capitalize 123`} {...props} 
                        onClick={()=> {navigate("/login"), logoutHandler()}}
                    >
                          Logout
                    </button>
                  )
}

export default LogoutBtn