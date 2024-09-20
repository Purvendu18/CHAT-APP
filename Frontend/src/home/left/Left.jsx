// import React from 'react';
import Search from './Search.jsx';
import Users from './Users.jsx';
export default function Left() {
  return (
    <>
     <div className="w-full border-white bg-black text-white">
        <h1 className='text-3xl font-bold p-2 px-6 py-3'>
            Chats
        </h1>
         <Search></Search>  
         <Users></Users>
     </div>
    </>
  )
}