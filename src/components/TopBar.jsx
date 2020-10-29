import React from "react";
import "./TopBar.css";

function TopBar(props) {
  return (
    <>
      <div className={"topline topline--color-" + props.color}></div>
    </>
  );
}

export default TopBar;
