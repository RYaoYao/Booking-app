import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
const Navbar = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleClickLogin = () =>{
    navigate("/login");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">Eclipse Booking</span>
        </Link>
        {user ? user.username :  (
        <div className="navItems">
           <button className="navButton">Register</button>
          
          <button className="navButton" onClick={handleClickLogin}>Login</button>
        </div>
          )}
      </div>
    </div>
  )
}

export default Navbar