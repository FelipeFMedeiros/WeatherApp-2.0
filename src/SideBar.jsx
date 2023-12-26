import SideMenu from "./SideMenu"

function SideBar() {
  return (
    <div className="sidebar">
        <a href="#" className="logo">
            <i className='bx'><img src="./public/logo.svg"/></i>
            <div className="logo-name"><span>WeatherApp </span>2.0</div>
        </a>

      <SideMenu/>

    </div>
  )
}

export default SideBar