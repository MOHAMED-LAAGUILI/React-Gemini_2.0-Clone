import { useState } from 'react';
import './SideBar.css';
import { assets } from '../../assets/assets';

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar">
        {/* Sidebar Content */}
        <div className="content">
          {/* Top Section */}
          <div className="top">
              <div className="new-chat">
                <img src={assets.plus_icon} alt="New chat" />
            {isOpen && (
                <p>New Chat</p>
              )}
              </div>
            <div className="recent">
              {isOpen && <p className="recent-title">Recent</p>}
              <div className="recent-entry">
                <img src={assets.message_icon} alt="Recent chat" />
                {isOpen && <p>What is React...</p>}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom">
            {[
              { icon: assets.question_icon, label: 'Help' },
              { icon: assets.history_icon, label: 'Activity' },
              { icon: assets.setting_icon, label: 'Settings' },
            ].map((item, idx) => (
              <div key={idx} className="bottom-item recent-entry">
                <img src={item.icon} alt={item.label} />
                {isOpen && <p>{item.label}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '❮' : '❯'}
      </button>
    </div>
  );
}

export default SideBar;
