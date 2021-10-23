let currentPage = 1;
let limit = 25;
let total = 0;
var scrollCount = 0;
var funcCount = 0;

var quoteWrap = document.querySelector(".quotes");

window.addEventListener("scroll", () => {
  document.getElementById("scount").textContent = ++scrollCount;
  // * document.documentElement returns the root element
  // * scrollTop - scrollHeight = clientHeight
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    document.getElementById("fcount").textContent = ++funcCount;
    total = total + limit;
    currentPage++;
    fetchQuotes(currentPage, limit, total);
  }
});

function getQuotes(page, limit, total) {
  return fetch(`https://quotable.io/quotes?page=${page}&limit=${limit}`).then(
    function (response) {
      return response.json();
    }
  );
}

function displayQuotes(data) {
  for (var i = 0; i < data.length; i++) {
    var res = createCard(data[i]);
    quoteWrap.append(res);
  }
}

function createCard(d) {
  console.log(d);
  const div = document.createElement("blockquote");
  div.innerHTML = `<h3>${d.content}</h3>
                    <h4> - ${d.author}</h4>`;
  div.className = "quoteCard";

  return div;
}

async function fetchQuotes(page, limit, total) {
  setTimeout(async () => {
    try {
      const result = await getQuotes(page, limit, total);
      displayQuotes(result.results);
    } catch (error) {
      console.log(error.message);
    }
  }, 500);
}

fetchQuotes(currentPage, limit, total);
