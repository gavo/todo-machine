import React from "react";
import "./TodoIcon.css";
import { ReactComponent as CheckSVG } from "./img/checkbox.svg";
import { ReactComponent as UnCheckSVG } from "./img/square.svg";
import { ReactComponent as RemoveSVG } from "./img/cross.svg";
import { ReactComponent as PlusSVG } from "./img/plus.svg";

const iconTypes = {
  check: (color, onClick=()=>{}) => <CheckSVG className="Icon-svg Icon-svg--check" fill={color} onClick={onClick}/>,
  uncheck: (color, onClick=()=>{}) => <UnCheckSVG className="Icon-svg Icon-svg--uncheck" fill={color} onClick={onClick}/>,
  remove: (color, onClick=()=>{}) => <RemoveSVG className="Icon-svg Icon-svg--remove" fill={color} onClick={onClick}/>,
  plus: (color, onClick=()=>{}) => <PlusSVG className="Icon-svg Icon-svg--plus" fill={color} onClick={onClick}/>,
};

function TodoIcon({ type, color = "gray", onClick }) {
  return (
      iconTypes[type](color,onClick)
  );
}

export { TodoIcon };
