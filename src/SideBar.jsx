import SideMenu from "./SideMenu"
import { useSidebar } from './SidebarContext';

function SideBar() {
  const { isSidebarClosed } = useSidebar();

  return (
    <div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
      {/* Restante do conteúdo do Sidebar */}
      <a href="#" className="logo">
        <i className='bx'><img src="./public/logo.svg" alt="Logo"/></i>
        <div className="logo-name"><span>WeatherApp </span>2.0</div>
      </a>

      <SideMenu/>

    </div>
  )
}

export default SideBar