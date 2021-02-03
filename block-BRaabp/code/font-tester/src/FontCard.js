import React from "react";
import fontData from "./font.json";

function FontCard(props) {
  const font = props.font;
  const fontSize = props.fontSize;
  const text = props.text;
  return (
    <div className="card">
      <div className="flex">
        <span>{font["font-name"]}</span>
        <span>{font.styles} Styles</span>
      </div>
      <span>{font.by}</span>
      <p style={{ fontFamily: font["font-name"], fontSize: fontSize + "px" }}>
        {text}
      </p>
    </div>
  );
}

export default FontCard;
