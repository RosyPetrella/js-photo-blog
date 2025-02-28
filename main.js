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

      const markup = `
            <div class="card  col-lg-3 col-md-5 col-sm-12 d-flex">
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
          </div>`;

      insertHTML(rowEl, markup);

      //   rowEl.insertAdjacentHTML(
      //     "beforeend",
      //     `
      //         <div class="card col-lg-3 col-md-5 col-sm-12 d-flex">
      //             <img class="pin" src="./assets_day1/img/pin.svg" alt="" />
      //             <div>
      //                 <img
      //                 class="col-12 p-3"
      //                 src="${card.url}"
      //                 alt=""
      //                 />
      //             </div>
      //             <div class="description col-12">
      //                 <span>
      //                     <span class="date">${card.date}</span>
      //                     <p class="subtitle">${card.title}</p>
      //                     </span>
      //             </div>
      //       </div>`
      //   );
    });
  })
  .catch((error) => console.error(error.message));

function insertHTML(DOMElement, htmlContent) {
  DOMElement.insertAdjacentHTML("beforeend", htmlContent);
}
