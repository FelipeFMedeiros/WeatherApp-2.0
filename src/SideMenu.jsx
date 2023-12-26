import { useState } from "react";

function SideMenu() {
  const [activeItem, setActiveItem] = useState(0);
  
  const menuItems = [
    { icon: "bxs-dashboard", text: "Clima" },
    { icon: "bx-message-square-dots", text: "Informações" },
    { icon: "bx-cog", text: "Configurações" },
  ];

  const handleItemClick = (index) => {
    setActiveItem(index);
    console.log(`Clicou em:  [${index + 1}] ${menuItems[index].text}`);
  };


  return (
    <ul className="side-menu">
      {menuItems.map((item, index) => (
        <li
        key={index}
        className={index === activeItem ? 'active' : ''}
        onClick={() => handleItemClick(index)}
      >
        <a href="#">
            <i className={`bx ${item.icon}`}></i>
            {item.text}
        </a>
      </li>
      ))}
    </ul>
  );
}

export default SideMenu;
