import React from "react";
import PropTypes from "prop-types";
import History from "./History.js";
import SendMsg from "./SendMsg.js";

function Chat(props) {
  const { messages, onSendMsg, user } = props;

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>
      <History messages={messages} user={user} />
      <SendMsg onSendMsg={onSendMsg} user={user} />
    </div>
  );
}

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  onSendMsg: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default Chat;
