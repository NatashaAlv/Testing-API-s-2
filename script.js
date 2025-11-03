// import fetch from 'node-fetch';
// // const fetch = require("node-fetch");

// async function getCardByName(name) {
//   const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(name)}`;
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error(`API error: ${res.status}`);
//   }
//   const data = await res.json();
//   return data.data; // note: “data” field holds array of cards
// }

// getCardByName('Dark Magician')
//   .then(cards => {
//     console.log(cards);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// fetch("https://db.ygoprodeck.com/api/v7", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     query: `
//       query {
//         Media(id: 1, type: ANIME) {
//           id
//           title {
//             romaji
//             english
//           }
//           description
//         }
//       }
//     `
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

const cardName = "Dark Magician|Baby Dragon";
// const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician';
const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`;

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.data))
  .catch(console.error);