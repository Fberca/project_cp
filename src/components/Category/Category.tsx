import { Heading } from "@chakra-ui/react";
import Card, { CardData } from "../Card/Card";
import "../Card/card.css";

function Category({ title, cards }: { title: string; cards: CardData[] }) {
  return (
    <div>
      <Heading
        as="h1"
        fontFamily='"Geist", sans-serif'
        fontWeight="600"
        fontSize="3xl"
        color="hsl(210deg 10% 90%)"
        mb={4}
      >
        {title}
      </Heading>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Category;
