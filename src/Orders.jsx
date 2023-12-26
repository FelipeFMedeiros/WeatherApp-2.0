function Orders() {
  return (
    <div className="orders">
      <div className="header">
        <i className="bx bx-sun"></i>
        <h3>Céu limpo</h3>
      </div>
      <p>Descrição</p>
      <div
        className="description"
        style={{justifyContent: "center", textAlign: "center"}}
        >
        <img src="src/assets/day/clear.svg" style={{height: 200}} />
      </div>
    </div>
  );
}

export default Orders;
