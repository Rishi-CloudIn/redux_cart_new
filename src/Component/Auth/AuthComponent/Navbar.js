import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth";

function Navbar() {
  const auth = useAuth();
  // console.log(auth.user);
  return (
    <>
      <section>
        <nav className="nav d-flex justify-content-start bg-info text-dark">
          <NavLink to="/" className="nav-a">
            Home
          </NavLink>
          <NavLink to="/profile" className="nav-a">
            profile
          </NavLink>
          {!auth.user && (
            <NavLink to="/login" className="nav-a">
              login
            </NavLink>
          )}
        </nav>
      </section>
    </>
  );
}

export default Navbar;
