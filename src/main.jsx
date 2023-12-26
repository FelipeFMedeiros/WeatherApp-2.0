import React from "react";
import ReactDOM from "react-dom/client";
import SideBar from "./SideBar.jsx";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Insight from "./Insight.jsx";
import Orders from "./Orders.jsx";
import Reminders from "./Reminders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
          <Orders/>

          <Reminders/>

        </div>



      </main>
    </div>
  </React.StrictMode>
);
