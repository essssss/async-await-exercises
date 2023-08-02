let baseURL = "https://deckofcardsapi.com/api/deck";

const btn = document.querySelector("button");
const cardArea = document.getElementById("card-area");

async function getCard() {
    newDeck = await axios.get(`${baseURL}/new/shuffle`);
    deckID = newDeck.data.deck_id;
    res = await axios.get(`${baseURL}/${deckID}/draw`);
    console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
}

async function getCards() {
    newDeck = await axios.get(`${baseURL}/new/shuffle`);
    deckID = newDeck.data.deck_id;
    resArray = [];
    for (let i = 0; i < 2; i++) {
        res = await axios.get(`${baseURL}/${deckID}/draw`);
        resArray.push(res);
    }
    for (let res of resArray) {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
    }
}

async function setup() {
    let boardDeck = await axios.get(`${baseURL}/new/shuffle`);
    let boardDeckID = boardDeck.data.deck_id;
    console.log(boardDeckID);

    btn.addEventListener("click", async function () {
        res = await axios.get(`${baseURL}/${boardDeckID}/draw`);
        let cardSrc = res.data.cards[0].image;

        cardArea.insertAdjacentHTML("beforeend", `<img src="${cardSrc}">`);
        if (res.data.remaining === 0) btn.remove();
    });
}
setup();
