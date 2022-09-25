import React from "react";
import profileImg from "../images/ma-prof-pic.jpeg"
import "../styles.css"

export default function ProfileImage(){
  return(
    <div className="inner-container">
      <img
        src={profileImg}
        alt="Profile pic"
        className="profImg"
      />
    </div>
  )
}