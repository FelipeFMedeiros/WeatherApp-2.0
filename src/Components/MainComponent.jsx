// Import components
import { ThemeProvider } from "./ThemeProvider";
import SideBar from "./SideBar.jsx";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Insight from "./Insight.jsx";
import Stats from "./Stats.jsx";
import Previsions from "./Previsions.jsx";
import Loading from "./Loading.jsx";
import { SidebarProvider } from "./SidebarContext";

function MainComponent() {
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
  export default MainComponent;