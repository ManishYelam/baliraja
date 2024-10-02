// src/components/Notifications.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const notifications = [
  { id: 1, message: "New comment on your post", time: "2 minutes ago" },
  { id: 2, message: "You have a new follower", time: "5 minutes ago" },
  { id: 3, message: "Your password was changed successfully", time: "10 minutes ago" },
  { id: 4, message: "New like on your photo", time: "1 hour ago" },
];

const Notifications = () => {
  return (
    <div className="dropdown-menu dropdown-menu-end">
      <h6 className="dropdown-header">Notifications</h6>
      <div className="notifications-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {notifications.length === 0 ? (
          <div className="dropdown-item">No notifications</div>
        ) : (
          notifications.map(notification => (
            <div className="dropdown-item" key={notification.id}>
              <div>{notification.message}</div>
              <small className="text-muted">{notification.time}</small>
            </div>
          ))
        )}
      </div>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item text-center" href="#">See all notifications</a>
    </div>
  );
};

export default Notifications;