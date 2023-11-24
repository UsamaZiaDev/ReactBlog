import { Link, useNavigate } from "react-router-dom"

import { LogoutBtn, Logo, Input } from "../index"
import { useSelector } from "react-redux"

const Header = () => {

  const authStatus = useSelector((state) => state.auth.status)

  const navItems = [
    {
      name: 'Home',
      slug:'/',
      active: true,
    },
    {
      name: 'Login',
      slug:'/login',
      active: !authStatus,
    },
    {
      name: 'signup',
      slug:'/signup',
      active: !authStatus 
    },
    {
      name: 'All Posts',
      slug:'/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug:'/add-post',
      active: authStatus,
    }
  ]

  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="pb-1 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <Link to="/" className="me-2 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <Logo width="55" />
        </Link>

        <ul className="nav pt-2 col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {
              navItems?.map(navItem => {
                return(
                    navItem.active && 
                      <li key={navItem.name}>
                        <Link to={navItem?.slug} 
                          className={`nav-link px-2 text-secondary`}
                        > 
                            {navItem?.name} 
                        </Link>
                  </li>
                )
              })
            }
        </ul>

        { authStatus && <LogoutBtn/> }
      </div>
    </div>
  </header>
    
  )
}

export default Header




