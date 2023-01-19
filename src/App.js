import "./App.css";
import React from "react";
// import Navbar from "./Component/Auth/AuthComponent/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Profile from "./Component/Auth/AuthComponent/profile";
// import { AuthProvider } from "./Component/Auth/Auth";
// import Login from "./Component/Auth/AuthComponent/Login";
// import Home from "./Component/Auth/AuthComponent/Home";
// import About from "./Component/Auth/AuthComponent/About";
// import { RequireAuth } from "./Component/Auth/AuthComponent/RequireAuth";
import { Provider } from "react-redux";
import Cart from "./Component/Cart/cart";
import store from "./store";

function App() {
  return (
    // <AuthProvider>
    <Provider store={store}>
      <div className="App">
        <Cart />
        {/* <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />{" "}
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes> */}
      </div>
    </Provider>
    // </AuthProvider>
  );
}

export default App;
