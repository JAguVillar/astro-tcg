const cardIds = [];
interface Card {
  id: string;
  name: string;
}

async function fetchCards() {
  const response = await fetch("https://api.pokemontcg.io/v2/cards?q=name:mew&pageSize=10");
  const cardsJson = await response.json();

  const cards: Card[] = cardsJson.data.map(obj => ({ id: obj.id, name: obj.name }));
  cards.forEach(element => {
    cardIds.push({params: {id: element.id}});
  });
  
  return cards; 
}

async function iniciar() {
  try {
    const fetchedCards = await fetchCards();
  } catch (error) {
    console.error("Error fetcheando:", error);
  }
}

iniciar();

export const cards: Card[] = cardIds

export function getImg(type){
  return `/types/${type}.png`
}
