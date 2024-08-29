import ShopCard from "../ShopCard/ShopCard";
import "./CardsView.css";

export default function CardsView({ cards }) {
  return (
    <div className="card-container">
      {cards.map((card, i) => (
        <ShopCard key={i} card={card} />
      ))}
    </div>
  );
}
