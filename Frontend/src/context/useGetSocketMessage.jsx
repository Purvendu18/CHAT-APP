import  {useEffect} from "react";
// import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../statemanage/useConversation.js";
import { useSocketContext } from "./socketcontext.jsx";



const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessage } = useConversation();
  
    useEffect(() => {
      socket.on("newMessage", (newMessage) => {
        
        setMessage([...messages, newMessage]);
      });
      return () => {
        socket.off("newMessage");
      };
    }, [socket, messages, setMessage]);
  };
  export default useGetSocketMessage;
  