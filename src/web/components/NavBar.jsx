import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import AuthContext from "../../context/AuthProvider";
import { LOGOUT } from "../../utils/apis";

const NavBar = () =>{
  const { token, setToken, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout =  async() => {
    try{
      axios.post(LOGOUT, {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setToken(null);
      setUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      navigate("")
    }
    catch(err){
      console.error("Logout failed", err);
    }
  }
  return(
    <div className="navbar">
      <div className="navbar-left">
        <span className="app-name">Transactions App</span>
        {user?.name && <span className="user-name">| {user.name}</span>}
      </div>

      <div className="navbar-right">
        {user?.email && <span className="user-email">{user.email}</span>}
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
  </div>
  )
}
export default NavBar;