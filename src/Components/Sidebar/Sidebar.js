import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import navItems from '../../Assets/NavItems/NavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Import custom CSS for styles

const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state for mobile view
  const location = useLocation();

  useEffect(() => {
    setItems(navItems);
  }, []);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Hamburger icon for mobile to toggle sidebar */}
      <button className="menu-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`sidebar d-flex flex-column vh-100 bg-white shadow-sm ${isSidebarOpen ? 'open' : ''}`}>
        <div className="p-3 bg-primary text-white text-center rounded-top">
          <h4>Dashboard</h4>
        </div>
        <ul className="nav flex-column p-3">
          {items.map((item, index) => (
            <li className={`nav-item${item.dropdown ? ' dropdown' : ''}`} key={index}>
              <Link
                to={item.route}
                className={`nav-link ${item.dropdown ? ' dropdown-toggle' : ''} ${location.pathname === item.route ? ' active' : ''}`}
                role={item.dropdown ? 'button' : undefined}
                onClick={item.dropdown ? (e) => { e.preventDefault(); handleDropdownToggle(index); } : undefined}
                aria-expanded={openDropdown === index ? 'true' : 'false'}
                aria-controls={item.dropdown ? `dropdown-menu-${index}` : undefined}
              >
                {item.label}
                {item.dropdown && (
                  <FontAwesomeIcon
                    icon={openDropdown === index ? faChevronUp : faChevronDown}
                    className="ms-2"
                  />
                )}
              </Link>
              {item.dropdown && openDropdown === index && (
                <ul className="nav flex-column ms-3 sub-menu">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li className="nav-item" key={subIndex}>
                      <Link
                        className={`nav-link ${location.pathname === subItem.route ? ' active' : ''}`}
                        to={subItem.route}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto p-3">
          <Link to="/settings" className="nav-link text-dark">
            Settings
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
