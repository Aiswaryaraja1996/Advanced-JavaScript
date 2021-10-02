let currentPage = 1;
let limit = 5;

window.addEventListener("load", function () {
  fetchPost(null, currentPage, limit);
  createPagination();
  const btn = document.getElementById("btn-search");
  btn.addEventListener("click", function () {
    document.getElementById("head-title").textContent =
      "EXPLORE COMPREHENSIVE NEWS";
    var text = document.getElementById("search-txt").value;
    fetchPost(text, currentPage, limit);
  });
  document.getElementById("pagination").addEventListener("click", function () {
    handlePagination();
  });
});

async function handlePagination() {
  try {
    const pageNumber = parseInt(event.target.name);
    console.log(pageNumber);
    currentPage = pageNumber;
    var text = document.getElementById("search-txt").value;
    fetchPost(text, currentPage, limit);
    createPagination();
  } catch {}
}

function createPagination() {
  var pageWrap = document.getElementById("pagination");
  pageWrap.innerHTML = null;

  var prev = document.createElement("button");
  prev.textContent = "Previous";
  prev.name = currentPage - 1;
  if (currentPage === 1) {
    prev.disabled = true;
  }

  var current = document.createElement("button");
  current.textContent = currentPage;
  current.name = currentPage;

  var next = document.createElement("button");
  next.name = currentPage + 1;
  next.textContent = "Next";

  pageWrap.append(prev, current, next);
}

async function fetchPost(text, page, limit) {
  try {
    const result = await getPost(text, page, limit);

    display(result.articles);
  } catch (e) {}
}

function getPost(text, page, limit) {
  const apiKey = "04fadeced30642ae8075867840fe4a5b";
  const ctry = "in";

  if (!text) {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=${ctry}&category=technology&apiKey=${apiKey}&pageSize=10&page=${page}`
    ).then(function (response) {
      return response.json();
    });
  } else {
    return fetch(
      `https://newsapi.org/v2/top-headlines?q=${text}&apiKey=${apiKey}&pageSize=${limit}&page=${page}`
    ).then(function (response) {
      return response.json();
    });
  }
}

function display(data) {
  document.getElementsByClassName("headline-section")[0].innerHTML = null;
  for (var i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    div.className = "main-card";

    const div2 = document.createElement("div");
    div2.className = "news-card";

    const div3 = document.createElement("div");
    div3.className = "img-content";

    const img = document.createElement("img");
    img.src = data[i].urlToImage;

    const contDiv = document.createElement("div");
    contDiv.className = "content";

    const h4 = document.createElement("h4");
    h4.textContent = data[i].title;

    const p = document.createElement("p");
    p.textContent = data[i].publishedAt;

    const p2 = document.createElement("p");
    p2.textContent = data[i].description;

    div3.append(img);
    contDiv.append(h4, p, p2);
    div2.append(div3, contDiv);
    div.append(div2);

    document.getElementsByClassName("headline-section")[0].append(div);
  }
}
