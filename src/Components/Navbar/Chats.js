// src/components/Chats.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const chats = [
  { id: 1, name: "Alice", message: "Hey! How are you?", time: "2 minutes ago" },
  { id: 2, name: "Bob", message: "Let's catch up later.", time: "5 minutes ago" },
  { id: 3, name: "Charlie", message: "Are you coming to the party?", time: "10 minutes ago" },
  { id: 4, name: "Diana", message: "Looking forward to our meeting.", time: "1 hour ago" },
];

const Chats = () => {
  return (
    <div className="dropdown-menu dropdown-menu-end" style={{ maxHeight: '300px', overflowY: 'auto' }}>
      <h6 className="dropdown-header">Chats</h6>
      {chats.length === 0 ? (
        <div className="dropdown-item">No chats available</div>
      ) : (
        chats.map(chat => (
          <div className="dropdown-item" key={chat.id}>
            <div className="d-flex justify-content-between">
              <div>
                <strong>{chat.name}</strong>
                <div>{chat.message}</div>
              </div>
              <small className="text-muted">{chat.time}</small>
            </div>
          </div>
        ))
      )}
      <div className="dropdown-divider"></div>
      <a className="dropdown-item text-center" href="#">See all chats</a>
    </div>
  );
};

export default Chats;