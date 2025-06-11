const apiKey = "865b551d48msh1f0e39c31e0c5dap14d49fjsn09b433be9641";
let container = document.querySelector(".container");
let button = document.createElement("button");
button.classList = "btn";
button.textContent = "Load More";

let page = 1;

button.addEventListener("click", () => {
  page += 1;
  fetchData(page);
});
async function fetchData(pageNumber) {
  const url = `https://games-details.p.rapidapi.com/page/${pageNumber}`;
  try {
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
      // gameContainer.addEventListener("click", () => alert(item.id));
    });
    container.appendChild(button);
  } catch (error) {
    console.log(error);
  }
}

fetchData(page);
