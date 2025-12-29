import { useState } from "react";
import "./Sidebar.css";
import type { IMenuItem, SidebarProps } from "./types";

const SidebarItem = ({ item }: { item: IMenuItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <div className="menuItem">
        <a className="menuButton">
          {item.label}
        </a>
      </div>
    );
  }

  return (
    <div className="menuItem">
      <button 
        className="menuButton" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {item.label}
      </button>

      {isExpanded && (
        <div className="submenu">
          {item.children?.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = ({ isOpen, onClose, items }: SidebarProps) => {
  return (
    <>
      <div 
        className={`sidebarOverlay ${isOpen ? "open" : ""}`} 
        onClick={onClose}
      />
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={onClose} style={{marginBottom: '20px', cursor: 'pointer'}}>
          Close
        </button>
        <div className="menuList">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};