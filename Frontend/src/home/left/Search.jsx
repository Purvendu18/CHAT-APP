// Import React and the IoSearch icon
import {useState } from 'react';
import { IoSearch } from "react-icons/io5";
import useGetAllUsers from "../../context/useGetAllUsers.jsx";
import useConversation from "../../statemanage/useConversation.js"
import toast from 'react-hot-toast';


// Define the Search component
export default function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <div>
      <div className="px-6 py-5">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-1 items-center">
            <label className="border-2 border-black rounded-full flex items-center gap-2 w-full p-2">
              <input
                type="text"
                className="grow outline-none bg-transparent rounded-full px-4 py-2 text-white"
                placeholder="Search"
                value={Search}
                onChange={(e) => setSearch(e.target.value )}
              />
            </label>
            <button className="flex items-center justify-center">
              <IoSearch
                className="text-3xl p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 duration-300"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}