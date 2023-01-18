import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth";
import { signInWithGoogle } from "./firebase";
function Login() {
  const [user, setUser] = useState("");
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const auth = useAuth();
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <>
      <div>
        <label>
          username :
          <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            auth.login(name);
            signInWithGoogle();
            navigate("/profile");
          }}
        >
          Google Login
        </button>
      </div>
    </>
  );
}

export default Login;
