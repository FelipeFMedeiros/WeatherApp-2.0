import { useContext } from 'react';
import SidebarContext from './SidebarContext';

export const UseSidebar = () => {
  return useContext(SidebarContext);
};