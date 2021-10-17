// window.addEventListener("load", function () {
//   getapi(api_url);
// });

// const api_url =
//   "https://zenquotes.io/api/quotes/62e21737bc30a0e3fcb090eca9258716fd259b11";

// async function getapi(url) {
//   const response = await fetch(url);
//   var data = await response.json();
//   displayQuotes(data);
// }

// function displayQuotes(data) {
//   const cont = document.getElementsByClassName("container")[0];
//   for (var i = 0; i < 25; i++) {
//     const card = createCard(data[i]);
//     cont.append(card);
//   }
// }

// function createCard(d) {
//   const div = document.createElement("div");
//   div.innerHTML = d.h;
//   div.className = "card-container";

//   return div;
// }

const quotesEl = document.querySelector(".quotes");
// const loaderEl = document.querySelector(".loader");

// get the quotes from API
const getQuotes = async (page, limit) => {
  const API_URL = `https://quotable.io/quotes?page=${page}&limit=${limit}`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status}`);
  }
  return await response.json();
};

// show the quotes
const showQuotes = (quotes) => {
  quotes.forEach((quote) => {
    const quoteEl = document.createElement("blockquote");
    quoteEl.classList.add("quote");

    quoteEl.innerHTML = `
           
            ${quote.content}
            <footer>${quote.author}</footer>
        `;

    quotesEl.appendChild(quoteEl);
  });
};

// const hideLoader = () => {
//   loaderEl.classList.remove("show");
// };

// const showLoader = () => {
//   loaderEl.classList.add("show");
// };

const hasMoreQuotes = (page, limit, total) => {
  const startIndex = (page - 1) * limit;
  console.log(page, limit, total, startIndex);
  return total === 0 || startIndex <= total;
};

// load quotes
const loadQuotes = async (page, limit) => {
  // show the loader
  //   showLoader();

  // 0.5 second later
  setTimeout(async () => {
    try {
      // if having more quotes to fetch
      console.log(page, limit, total);
      if (hasMoreQuotes(page, limit, total)) {
        // call the API to get quotes
        const response = await getQuotes(page, limit);
        // show quotes
        showQuotes(response.results);
        // update the total
        total = response.lastItemIndex;
        console.log(total);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      //   hideLoader();
    }
  }, 0);
};

// control variables
let currentPage = 1;
const limit = 50;
let total = 0;

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // console.log("top", scrollTop);
    // console.log("height", scrollHeight);
    // console.log(clientHeight);
    if (
      scrollTop + clientHeight >= scrollHeight - 10 &&
      hasMoreQuotes(currentPage, limit, total)
    ) {
      console.log(currentPage);
      currentPage++;
      loadQuotes(currentPage, limit);
    }
  },
  {
    passive: true,
  }
);

// initialize
loadQuotes(currentPage, limit);
