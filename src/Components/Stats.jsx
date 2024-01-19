import SunStatus from "./SunStatus";

function Stats() {
  return (
    <div className="stats">
      <div className="header">
        <i className="bx bx-globe"></i>
        <h3 className="weather-title">Céu limpo</h3>
      </div>
      <p className="weather-description"></p>
      <div
        className="description"
        style={{justifyContent: "center", textAlign: "center"}}
        >
        <img className="weather-img" src="" style={{maxHeight: 400}} />
      </div>
      <SunStatus />
    </div>
  );
}

export default Stats;
