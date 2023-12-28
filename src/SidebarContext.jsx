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
        requestAnimationFrame(() => {
          if (window.innerWidth < 768) {
            setIsSidebarClosed(true);
            window.addEventListener("load", handleResize);
            window.addEventListener("resize", handleResize);
            window.addEventListener("orientationchange", handleResize);
          } else {
            setIsSidebarClosed(false);
          }
        });
      }, 100);
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
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
