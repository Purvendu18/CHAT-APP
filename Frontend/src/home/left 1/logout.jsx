/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from 'react-hot-toast';


export default function Logout() {
  const[loading, setLoading] = useState(false);
  const handleLogout = async() => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("CHAT-APP");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout succesfully");
    } catch (error) {
      console.log(error);
      toast.error("Faiiled to logout");
      
    }
  }
    return (
      <>
       <div className="w-[4%] border-white bg-black text-white flex flex-col justify-end">
           
           <div className="px-3 py-6">
            <form action=''>
            <div className="flex items-center">
          <button className="flex items-center justify-center">
           <BiLogOut className="text-3xl p-1 text-white rounded-lg hover:bg-gray-700 duration-300" onClick={handleLogout} />
          </button>
            </div>
            </form>
            </div>
       </div>
      </>
    )
  }