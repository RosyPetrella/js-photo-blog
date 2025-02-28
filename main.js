const containerEl = document.querySelector(".container");
const rowEl = document.querySelector(".row");

// Recupero l'API tramite la fetch
fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => response.json())
  .then((data) => {
    const pictureArray = data;
    console.log(pictureArray);

    // ciclo nell'array creato per prendermi singolarmente ogni oggetto (card)
    pictureArray.forEach((card) => {
      console.log(card);

      rowEl.insertAdjacentHTML(
        "beforeend",
        `
            <div class="card col-3 d-flex">
                <img class="pin" src="./assets_day1/img/pin.svg" alt="" />
                <div>
                    <img
                    class="col-12 p-3"
                    src="${card.url}"
                    alt=""
                    />
                </div>
                <div class="description col-12">
                    <span>
                        <span class="date">${card.date}</span>
                        <p class="subtitle">${card.title}</p>
                        </span>
                </div>
          </div>`
      );
    });
  })
  .catch((error) => console.error(error.message));
