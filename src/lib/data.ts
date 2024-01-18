// import { fetchCards } from "@lib/data";

const cardIds = [];

interface Card {
  id: string;
  name: string;
}

// export const cards: Card[] = [
//   {
//     id: "si1-1",
//     name: "Sith Infiltrator",
//   },
//   {
//     id: "pop4-4",
//     name: "Naboo Royal Starship",
//   },
// ];

async function fetchCards() {
  const cards = await fetch("https://api.pokemontcg.io/v2/cards?q=name:mew&pageSize=10");
  const cardsJson = await cards.json();
  console.log(cardsJson);

  const ids = cardsJson.data.map(obj => {
    console.log(obj);

  })

  return cardsJson.data;
}

export { cardIds, fetchCards };
