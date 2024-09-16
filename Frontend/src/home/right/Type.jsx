import { IoSend } from "react-icons/io5";
export default function Type() {
    return (
        <>
            <div className="flex h-[8vh]">
            <input type="text" placeholder="Type here" className=" w-[95%] outline-none bg-gray-600 py-2 text-black" />
            
            <button className="px-2 py-3 size-9 text-4xl text-gray-600">
            <IoSend />
            </button>
            



            </div>
        </>
    )
}