import React, { useContext } from "react";
import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Knitting from "../../assets/knitting.png";
import Hiking from "../../assets/hiking.png";
import Baking from "../../assets/bake.png";
import Gaming from "../../assets/7.png";
import Messages from "../../assets/10.png";
import { AuthContext } from "../../context/authContext";
import { DarkModeContext } from "../../context/darkModeContext";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your hobbies </span>
          <div className="item">
            <img src={Knitting} alt="" />
            <span>Knitting</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Hiking} alt="" />
            <span>Hiking</span>
          </div>
          <div className="item">
            <img src={Baking} alt="" />
            <span>Cooking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
