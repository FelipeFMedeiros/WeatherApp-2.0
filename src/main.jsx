import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeProvider";
import SideBar from "./SideBar.jsx";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Insight from "./Insight.jsx";
import Stats from "./Stats.jsx";
import Previsions from "./Previsions.jsx";
import { SidebarProvider } from "./SidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <SideBar />

        <div className="content">
          <NavBar />

          <main>
            <Header />

            <ul className="insights">
              <Insight name="Temperatura" classe="bxs-thermometer" />
              <Insight name="Sensação Térmica" classe="bxs-thermometer" />
              <Insight name="Umidade do ar" classe="bx-droplet" />
              <Insight name="Velocidade do vento" classe="bx-wind" />
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
