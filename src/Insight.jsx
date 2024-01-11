// eslint-disable-next-line react/prop-types
function Insight({ name, classe, ident}) {
  return (
    <div>
      <li>
        <i className={`bx ${classe}`}></i>
        <span className="info">
          <h3 className={`${ident}`}>
            25 <span>°C</span>
          </h3>
          <p>{ name }</p>
        </span>
      </li>
    </div>
  );
}

export default Insight;
