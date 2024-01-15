import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    console.log("Loading...");
  }

  return (
    <React.StrictMode>
      <ThemeProvider>
        <SidebarProvider>
          <SideBar />

          <div className="content">
            <NavBar />

            <div
              className="loader"
              style={{
                display: isLoading ? "flex" : "none",
                animation: isLoading ? "" : "fadeOut 0.5s forwards",
              }}>
                <Loading/>
            </div>

            <main
              style={{
                display: isLoading ? "none" : "block",
                animation: "fadeIn 1s forwards",
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
    </React.StrictMode>
  );
}
export default MainComponent;

ReactDOM.createRoot(document.getElementById("root")).render(<MainComponent />);
