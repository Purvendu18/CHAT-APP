// import React from 'react'
import { BiLogOut } from "react-icons/bi";
export default function Logout() {
    return (
      <>
       <div className="w-[4%] border-white bg-black text-white flex flex-col justify-end">
           
           <div className="px-3 py-6">
            <form action=''>
            <div className="flex items-center">
          <button className="flex items-center justify-center">
           <BiLogOut className="text-3xl p-1 text-white rounded-lg hover:bg-gray-700 duration-300" />
          </button>
            </div>
            </form>
            </div>
       </div>
      </>
    )
  }