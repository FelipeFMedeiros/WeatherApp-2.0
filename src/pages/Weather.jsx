// Import components
import { ThemeProvider } from "../Components/ThemeProvider.jsx";
import SideBar from "../Components/SideBar.jsx";
import NavBar from "../Components/NavBar.jsx";
import Header from "../Components/Header.jsx";
import Insight from "../Components/Insight.jsx";
import Stats from "../Components/Stats.jsx";
import Previsions from "../Components/Previsions.jsx";
import Loading from "../Components/Loading.jsx";
import { SidebarProvider } from "../Components/SidebarContext.jsx";

function Weather() {
    return (
        <ThemeProvider>
          <SidebarProvider>
            <SideBar />
  
            <div className="content">
              <NavBar />
  
              <div
                className="loader"
                style={{
                  display: "flex",
                }}>
                  <Loading/>
              </div>
  
              <main
                className="main-container"
                style={{
                  display: "none",
                }}>
                <Header />
  
                <ul className="insights">
                  <Insight
                    name="Temperatura"
                    classe="bxs-thermometer"
                    ident="local-temp"
                  />
                  <Insight
                    name="Sensação Térmica"
                    classe="bxs-thermometer"
                    ident="local-feels-like"
                  />
                  <Insight
                    name="Umidade do ar"
                    classe="bx-droplet"
                    ident="local-umidity"
                  />
                  <Insight
                    name="Velocidade do vento"
                    classe="bx-wind"
                    ident="local-wind"
                  />
                </ul>
  
                <div className="bottom-data">
                  <Stats />
  
                  <Previsions />
                </div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
    );
  }
  export default Weather;