import useConversation from "../../statemanage/useConversation";
import { useSocketContext } from "../../context/socketcontext";
// import { CiMenuFries } from "react-icons/ci";


export default function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  return (
      <>
        <div className="flex space-x-4 h-[8vh] px-6 py-4 bg-gray-600 hover:bg-gray-200 duration-300 items-center">
          <div>
          <div className="avatar online">
            <div className="w-10 rounded-full overflow-hidden">
                <img
                 src="https://pearlss4development.org/wp-content/uploads/2020/05/profile-placeholder.jpg"
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
  
          <div>
            <h1 className="text-lg font-bold">{selectedConversation.name}</h1>
            <span className="text-sm">
              {getOnlineUsersStatus(selectedConversation._id)}
            </span>
          </div>
        </div>
      </>
    );
  }
  