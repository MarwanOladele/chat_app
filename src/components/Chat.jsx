import React from "react";
import add from "../images/add.png";
import cam from "../images/cam.png";
import more from "../images/more.png";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Marwan</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  ); 
};

export default Chat;
