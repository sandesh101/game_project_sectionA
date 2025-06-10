const url = "https://games-details.p.rapidapi.com/page/1";
const apiKey = "865b551d48msh1f0e39c31e0c5dap14d49fjsn09b433be9641";
let container = document.querySelector(".container");

async function fetchData() {
  let response = await fetch(url, {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "games-details.p.rapidapi.com",
    },
  });

  let responseData = await response.json();
  let gameData = responseData.data.pages;
  gameData.map((item) => {
    let gameContainer = document.createElement("div");
    gameContainer.className = "game-container";

    gameContainer.innerHTML = `
        <div class="image">
          <img
            src=${item.img}
            alt=""
          />
        </div>
        <div class="name">
          <p>${item.name}</p>
        </div>
        <hr />
        <div class="info">
          <div class="price">
            <span>Price</span>
            <p>${item.price}</p>
          </div>
          <div class="release-date">
            <span>Release Date</span>
            <p>${item.release_date}</p>
          </div>
        </div>
      `;

    container.append(gameContainer);
  });
}

fetchData();
