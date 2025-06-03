import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import AuthContext from "../../context/AuthProvider";
import { LOGOUT } from "../../utils/apis";

const NavBar = () =>{
  const { token, setToken, setUser } = useContext(AuthContext);
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
    <div>
      NavBar
       <button onClick={logout}>Logout</button>
    </div>
  )
}
export default NavBar;