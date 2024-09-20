import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import {useAuth} from "./AutProvider.jsx";
import PropTypes from "prop-types"; // Import PropTypes

const socketContext = createContext();


export const useSocketContext = () => {
    return useContext(socketContext);
  };
  
  export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [authUser] = useAuth();
  
    useEffect(() => {
      if (authUser) {
        console.log(authUser)
        const socket = io("http://localhost:3020/", {
          query: {
            userId: authUser.user._id,
          },
        });
        setSocket(socket);
        socket.on("getOnlineUsers", (users) => {
          setOnlineUsers(users);
        });
        return () => socket.close();
      } else {
        if (socket) {
          socket.close();
          setSocket(null);
        }
      }
    }, [authUser]);
    return (
      <socketContext.Provider value={{ socket, onlineUsers }}>
        {children}
      </socketContext.Provider>
    );
    
  };

  SocketProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is provided
  };
  
  