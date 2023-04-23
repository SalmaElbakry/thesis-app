import React from 'react'
import "./rightBar.scss"
import User from "../../assets/user.png";

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span> 
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Ignore</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Ignore</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Jane Doe</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Jane Doe</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Jane Doe</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Jane Doe</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default RightBar;