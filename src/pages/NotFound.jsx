import "../styles/not-found.css";
import { ThemeProvider } from "../Components/ThemeProvider";

function NotFound() {
  return (
    <ThemeProvider>
      <div className="notfound-container">
        <h1 className="h1notfound">Página não encontrada!</h1>
        <div className="notfound-message">
          <i className="bx bxs-error-alt inotfound"></i>
          <p className="pnotfound">Ops! Parece que a página que você está procurando não existe.</p>
        </div>
        <a className="anotfound" href="/">
          <button className="btn">
            <div>Voltar para página principal</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M4 12.0601H14.17"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </svg>
          </button>
        </a>
      </div>
    </ThemeProvider>
  );
}
export default NotFound;
