import Card from '../Card/Card';
import '../Card/card.css';

function Category({ title, cards }) {
  return (
    <div>
      <h1 className="category-title">{title}</h1>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Category;
