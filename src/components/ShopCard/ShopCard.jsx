import "./ShopCard.css";

export default function ShopCard(props) {
  const { card } = props;
  return (
    <div className="card">
      <img className="card-img" src={card.img} alt={card.name}></img>
      <div className="card-content">
        <h3 className="card-name">{card.name}</h3>
        <span className="card-color">{card.color}</span>
        <div className="card-footer">
          <div className="card-price">${card.price}</div>
          <button className="card-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
