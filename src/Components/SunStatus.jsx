import { useEffect, useRef } from 'react';

function SunStatus() {
  let sunrise, sunset;
  const sunriseRef = useRef(null);
  const sunsetRef = useRef(null);

  // Força a atualização do SVG 
  useEffect(() => {
    requestAnimationFrame(() => {
        const sunriseSvg = sunriseRef.current;
        const sunsetSvg = sunsetRef.current;
        const sunriseParent = sunriseSvg.parentNode;
        const sunsetParent = sunsetSvg.parentNode;

        sunriseParent.removeChild(sunriseSvg);
        sunriseParent.appendChild(sunriseSvg);

        sunsetParent.removeChild(sunsetSvg);
        sunsetParent.appendChild(sunsetSvg);
    });
}, []);

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
        <img ref={sunriseRef} src={sunrise} style={{ height: 110 }}/>
        <h2>Nascer do sol</h2>
        <p className="sunrise-text"></p>
      </div>
      <div className="sunset">
        <img ref={sunsetRef} src={sunset} style={{ height: 110 }}/>
        <h2>Por do sol</h2>
        <p className="sunset-text"></p>
      </div>
    </div>
  );
}
export default SunStatus;
