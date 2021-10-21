import Navbar from "./navbar.js";

const handleSearch = async () => {
  try {
    console.log(1);
    var receipe = document.getElementById("searchText").value;
    const res = await getReceipes(receipe);
    console.log(res);
    displayReceipe(res.meals);
  } catch (e) {
    console.log("Error Occured : " + e.message);
  }
};

window.addEventListener("load", () => {
  document.getElementById("header").innerHTML = Navbar();

  document.getElementById("searchText").addEventListener("input", function () {
    event.preventDefault();
    document.getElementById("container").innerHTML = "";
    debouncer(handleSearch, 500)();
  });
});

const getReceipes = (rec) => {
  if (rec) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${rec}`
    ).then((res) => res.json());
  }
  else{
    document.getElementById("container").innerHTML = "";
  }
};

const displayReceipe = (rec) => {
  for (var i = 0; i < rec.length; i++) {
    var card = createCard(rec[i]);
    document.getElementById("container").appendChild(card);
  }
};

const createCard = (rec) => {
  console.log(rec);
  const div = document.createElement("div");
  div.className = "card";
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = rec.strMealThumb;

  figure.appendChild(img);
  const h2 = document.createElement("h2");
  h2.textContent = rec.strMeal;
  const h3 = document.createElement("h3");
  h3.textContent = rec.strCategory;
  const h4 = document.createElement("h4");
  h4.textContent = "Instructions";
  const h4_2 = document.createElement("h4");
  h4_2.textContent = rec.strInstructions;

  div.append(figure, h2, h3, h4, h4_2);
  return div;
};

function debouncer(fn, delay) {
  let id;
  return function () {
    id && clearTimeout(id);
    id = setTimeout(function () {
      fn();
    }, delay);
  };
}
