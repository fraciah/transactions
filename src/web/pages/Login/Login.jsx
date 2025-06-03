import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { LOGIN } from "../../../utils/apis";
import AuthContext from "../../../context/AuthProvider";

const Login = () =>{
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(AuthContext);
  const [respError, setRespError] = useState("");
  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleLogin = async (userInfo) => {
    try {
      const res = await axios.post(LOGIN, {
        username: userInfo.username,
        password: userInfo.password,
      });

      setToken(res.data.token);
      localStorage.setItem("accessToken", res.data.token);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/transactions"); 
    } 
    catch (err) {
      setRespError(err.response.data.message)
    }
  };

  return(
    <div className="auth-container">
      <div className="login-icon">icon</div>
      <span className="title">Transactions App</span>
      <span className="subtitle">Login to your account</span>

      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <span>Welcome back</span>
        <span className="subtext">Enter your credentials to access your account</span>
        {respError && <span className="error-msg">{respError}</span>}
        <div className="auth-detail">
          <label>Username</label>
          <input
            {...register("username", {required: "Username is required"})}
            type="text"
            placeholder="username"
          />
        </div>
        {errors.email && <span className="error-msg">{errors.email.message}</span>}

        <div className="auth-detail">
          <label>Password</label>
          <input
            {...register("password", {required: "Password is required"})}
            type="password"
          />
        </div>
        {errors.password && <span className="error-msg">{errors.password.message}</span>}

        <button>Login</button>
      </form>
    </div>
  )
}
export default Login;