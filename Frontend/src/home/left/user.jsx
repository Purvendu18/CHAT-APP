// // import React from "react";
// import useConversation from "../../statemanage/useConversation.js";
// import { useSocketContext } from "../../context/socketcontext.jsx";

// // eslint-disable-next-line react/prop-types
// function User({user}) {
//   console.log('user', user);

//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const isSelected = selectedConversation?._id === user._id;
//   const { socket, onlineUsers } = useSocketContext();
//   const isOnline = onlineUsers.includes(user._id);
//   return (
//     <div
//       className={`hover:bg-slate-600 duration-300 ${
//         isSelected ? "bg-slate-700" : ""
//       }`}
//       onClick={() => setSelectedConversation(user)}
//     >
//       {/* <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
//         <div className={`avatar ${isOnline ? "online" : ""}`}>
//           <div className="w-12 rounded-full">
//           <img src="https://pearlss4development.org/wp-content/uploads/2020/05/profile-placeholder.jpg" />        
//           </div>
//         </div>
//         <div>
//           <h1 className=" font-bold">{user.name}</h1>
//           <span>{user.email}</span>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default User;


function user({user}) {
  return (
    <div>user</div>
  )
}

export default user