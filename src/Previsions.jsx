import List from "./List";

function Previsions() {
    const listItems = Array.from({ length: 7 }, (_, index) => (
        <List key={index + 1} day={index + 1} />
      ));
    
  return (
    <div className="previsions">
      <div className="header">
        <i className="bx bx-list-ul"></i>
        <h3>Previsão de 7 dias</h3>
      </div>
      <div>
        <ul className="list">
            {listItems}
        </ul>
      </div>
    </div>
  );
}

export default Previsions;
