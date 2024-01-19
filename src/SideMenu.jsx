import { useState } from "react";

function SideMenu() {
  const [activeItem, setActiveItem] = useState(0);

  const menuItems = [
    { icon: "bxs-dashboard", text: "Clima", ref: "/" },
    { icon: "bx-message-square-dots", text: "Informações", ref: "/info" },
    { icon: "bx-cog", text: "Configurações", ref: "/settings" },
  ];

  const handleItemClick = (index) => {
    if (index === activeItem) {
      event.preventDefault();
    } else {
      setActiveItem(index);
      console.log(`Clicou em:  [${index + 1}] ${menuItems[index].text}`);
    }
  };

  return (
    <ul className="side-menu">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={index === activeItem ? "active" : ""}
          onClick={() => handleItemClick(index)}>
          <a href={item.ref}>
            <i className={`bx ${item.icon}`}></i>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SideMenu;
