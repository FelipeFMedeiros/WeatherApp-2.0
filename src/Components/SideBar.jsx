import SideMenu from "./SideMenu";
import { UseSidebar } from './UseSideBar';

let logoPath;
if (import.meta.env.MODE === 'production') {
  logoPath = '/logo.svg'; // Caminho relativo no ambiente de produção
} else {
  logoPath = '/public/logo.svg'; // Caminho relativo no ambiente de desenvolvimento
}

function SideBar() {
  const { isSidebarClosed } = UseSidebar();

  return (
    <div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
      {/* Restante do conteúdo do Sidebar */}
      <a href="/" className="logo">
        <i className='bx'><img src={logoPath} alt="Logo"/></i>
        <div className="logo-name"><span>WeatherApp </span>2.0</div>
      </a>

      <SideMenu/>
    </div>
  );
}

export default SideBar;
