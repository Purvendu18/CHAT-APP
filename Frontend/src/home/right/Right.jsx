// import React from 'react'

import Chatuser from "./Chatuser";
import Mesaages from "./Messages";
import Type from "./Type";

export default function Right() {
  return (
    <>
     <div className="w-[70%] border-white bg-gray-400 text-black">
         




         <Chatuser></Chatuser>
         <div className="flex-pratik overflow-y-auto" style={{maxHeight: "calc(92vh - 8vh)"}}>
         <Mesaages></Mesaages>
         </div>
         <Type></Type>
     </div>
    </>
  )
}