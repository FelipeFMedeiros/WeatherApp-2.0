import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {

  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarClosed(true);
      } else {
        setIsSidebarClosed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    // Remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);

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
