var btnSubmit = document.getElementById("search");

search.addEventListener("click", function (e) {
  e.preventDefault();

  var apiKey = "2fdb2d1d";
  var movieName = document.getElementById("movieName").value;

  document.getElementById("movieName").value = "";
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      if (res.Error) {
        displayError();
        return;
      }
      displayMovie(res);
    });
});

function displayMovie(movieObj) {
  const cont = document.getElementsByClassName("movie-container")[0];
  const div = document.createElement("div");
  div.className = "card-container ";

  const div2 = document.createElement("div");
  div2.className = "card";

  const img = document.createElement("img");
  img.src = movieObj.Poster;

  const h2 = document.createElement("h2");
  h2.textContent = movieObj.Title;

  const p = document.createElement("p");
  p.textContent = movieObj.Plot;

  const h4 = document.createElement("h4");
  h4.textContent = `Release Date : ${movieObj.Released}`;

  const h42 = document.createElement("h4");
  h42.textContent = `IMDB Rating : ${movieObj.imdbRating}`;

  if (Number(movieObj.imdbRating) > 8.5) {
    const div3 = document.createElement("div");
    div3.className = "badge";
    const span = document.createElement("span");
    span.textContent = "RECOMMENDED";

    div3.append(span);
    div2.append(img);
    div.append(div3, div2, h2, p, h4, h42);
    cont.append(div);
  } else {
    //   div3.append(span);
    div2.append(img);
    div.append(div2, h2, p, h4, h42);
    cont.append(div);
  }
}

function displayError() {
  const cont = document.getElementsByClassName("movie-container")[0];
  const div = document.createElement("div");
  div.className = "card-container error";
  const div2 = document.createElement("div");
  div2.className = "card";
  const img = document.createElement("img");
  img.src = "./confused.png";
  img.className = "error-img";
  const h4 = document.createElement("h4");
  h4.textContent = "That seems to be a UNKNOWN MOVIE !! Try Again";

  div2.append(img);
  div.append(div2, h4);
  cont.append(div);

  setTimeout(function () {
    var obj = document.getElementsByClassName("error");
    for (const i of obj) {
      i.style.display = "none";
    }
  }, 2000);
}
