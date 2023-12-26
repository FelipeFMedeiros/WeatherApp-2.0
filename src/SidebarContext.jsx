import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarClosed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};