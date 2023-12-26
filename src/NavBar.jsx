import { UseSidebar } from "./UseSideBar";
import { useTheme } from "./ThemeProvider";

function NavBar() {
    const { toggleSidebar } = UseSidebar();
    const { isDarkMode, toggleTheme } = useTheme();
  
    return (
      <nav>
        <i className='bx bx-menu' onClick={toggleSidebar}></i>
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Pesquise sua localização"/>
            <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
          </div>
        </form>
        <input type="checkbox" id="theme-toggle" hidden checked={isDarkMode} onChange={() => { console.log("Checkbox changed!"); toggleTheme(); }} />
        <label htmlFor="theme-toggle" className="theme-toggle"></label>
        <a href="#" className="notif">
          <i className='bx bx-bell'></i>
          <span className="count">12</span>
        </a>
      </nav>
    )
  }
  
  export default NavBar;
