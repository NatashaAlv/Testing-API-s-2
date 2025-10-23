import fetch from 'node-fetch';

async function getCardByName(name) {
  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(name)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  const data = await res.json();
  return data.data; // note: “data” field holds array of cards
}

getCardByName('Dark Magician')
  .then(cards => {
    console.log(cards);
  })
  .catch(err => {
    console.error(err);
  });
