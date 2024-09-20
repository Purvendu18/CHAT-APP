/* eslint-disable no-unused-vars */
// import React from 'react';

import Login from './Components/login.jsx';
import Signup from './Components/Signup.jsx';
import { useAuth } from './context/AutProvider.jsx';
import Logout from './home/left 1/logout.jsx';
import Left from './home/left/left.jsx'
import toast, { Toaster } from 'react-hot-toast';
import Right from './home/right/right.jsx'
// import { Toaster } from "react-hot-toast";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
 console.log(authUser)
 
 return (
  <>
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              {/* <Logout></Logout>
              <Left></Left>
              <Right></Right> */}
              <Logout/>
              <Left/>
              <Right/>


<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
            </div>


          
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
    </Routes>
    <Toaster />
  </>
);
}

export default App;

