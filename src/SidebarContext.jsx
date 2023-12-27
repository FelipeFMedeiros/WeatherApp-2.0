import { createContext, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (window.innerWidth < 768) {
          setIsSidebarClosed(true);
        } else {
          setIsSidebarClosed(false);
        }
      }, 300);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("orientationchange", handleResize);
    
    // Remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.addEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarClosed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarContext;
