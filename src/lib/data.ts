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

export async function yourAsyncFunction() {
  try {
    const result = await getPrice();
    console.log(result);
    return result
  } catch (error) {
    console.error("Error in yourAsyncFunction:", error);
  }
}


export async function getPrice() {
  try {
    const response = await fetch('https://dolarapi.com/v1/dolares/blue');
    const data = await response.json();
    console.log(data);
    
    return data.compra;
    
  } catch (error) {
    console.error("Error fetching price:", error);
    throw error; // Re-throw the error to propagate it
  }
}