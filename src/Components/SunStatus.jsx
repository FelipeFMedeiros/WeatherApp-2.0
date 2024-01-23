function SunStatus() {
    let sunrise, sunset;

  if (import.meta.env.MODE === "production") {
    // Ambiente de produção
    sunrise = "/sunrise.svg";
    sunset = "/sunset.svg";
  } else {
    // Ambiente local
    sunrise = "public/sunrise.svg";
    sunset = "public/sunset.svg";
  }

  return (
    <div className="sun-status">
      <div className="sunrise">
        <img src={sunrise} style={{height: 100}} />
        <h2>Nascer do sol</h2>
        <p className="sunrise-text"></p>
      </div>
      <div className="sunset">
        <img src={sunset} style={{height: 100}} />
        <h2>Por do sol</h2>
        <p className="sunset-text"></p>
      </div>
    </div>
  );
}
export default SunStatus;
