import React, { useState } from 'react';
import Notifications from './Notification';
import Chats from './Chats';
import { BsFilterLeft } from "react-icons/bs";

const Navbar = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChats, setShowChats] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleChats = () => {
    setShowChats(!showChats);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '96%', maxWidth: '1000px', margin: '23px' }}>
      <button className="btn " onClick={toggleSidebar}>
        <BsFilterLeft />
      </button>
      <div className="ms-auto d-flex">
        <button className="btn  me-2" onClick={toggleNotifications}>
          🔔
        </button>
        {showNotifications && <Notifications />}
        <button className="btn  me-2" onClick={toggleChats}>
          💬
        </button>
        {showChats && <Chats />}
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="accountDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            👤
          </button>
          <ul className="dropdown-menu" aria-labelledby="accountDropdown">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
