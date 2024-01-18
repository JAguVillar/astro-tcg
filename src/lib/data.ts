// import { fetchCards } from "@lib/data";

const cardIds = ["si1-1", "pop4-4"];

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
  const cards = await fetch("https://api.pokemontcg.io/v2/cards");
  const cardsJson = await cards.json();
  console.log(cardsJson);
  
  return cardsJson.data;
}

export { cardIds, fetchCards };
