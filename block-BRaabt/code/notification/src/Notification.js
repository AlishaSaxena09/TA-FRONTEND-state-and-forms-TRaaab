import React from "react";

function Notification({ type, content, handleClick }) {
  return (
    <div className={`notification ${type}`}>
      <p>{content}</p>
      <span onClick={handleClick}>&#10008;</span>
    </div>
  );
}

export default Notification;
