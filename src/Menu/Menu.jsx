import React from "react";
import './Menu.css'

const Menu = ({ header, items, active, setActive}) => {
  return (
    <div>
      <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
        <div className="blur"></div>
        <div className="menu_content" onClick={(e) => e.stopPropagation()}>
          <div className="menu_header">{header}</div>
          <ul>
            {items.map(item =>
              <li>
                <span class="material-icons">{item.icon}</span>
                <a href={item.href}>{item.value}</a>
                
              </li>
            )}
          </ul>
        </div>
      </div>

    </div>
  )

}



export default Menu;