function Header() {
    return (
        <div className="header">
        <div className="left">
            <h1 className='tittle-location-name'>País / City</h1>
            <ul className="breadcrumb">
                <li><a href="#" className="subtittle-formated-address">
                        Nome do local encontrado
                    </a></li>
            </ul>
        </div>
        <a className="data-container">
            <i className='bx bx-time'></i>
            <span>19:57</span>|
            <span>Sábado, 19 de dezembro de 2023</span>
        </a>
    </div>
    )
}

export default Header