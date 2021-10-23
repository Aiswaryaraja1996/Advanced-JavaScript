// Creating movie database
var movieDatabase = [];

function Movie(name, release, poster, imdb) {
  this.name = name;
  this.release = release;
  this.poster = poster;
  this.imdb = imdb;
}

var lionKing = new Movie(
  "The Lion King",
  "19 July 2019",
  "./lionking.jpg",
  "6.8"
);
var pursuit = new Movie(
  "The Pursuit of Happyness",
  "15 December 2006",
  "./pursuit.jpg",
  "8.0"
);

var insideOut = new Movie(
  "Inside Out",
  "19 June 2015",
  "./insideout.jpg",
  "8.1"
);

var dragon = new Movie(
  "How to Train Your Dragon",
  "16 April 2010",
  "./dragon.jpg",
  "8.1"
);
var nun = new Movie("The Nun", "7 September 2018", "./nun.jpg", "5.3");
var gravity = new Movie("Gravity", "11 October 2013", "./gravity.jpg", "7.7");
var fault = new Movie(
  "The Fault in Our Stars",
  "4 July 2014",
  "./fault.jpg",
  "7.7"
);
var avengers = new Movie(
  "Avengers: Endgame",
  "26 April 2019",
  "./avengers.jpg",
  "8.4"
);
var gump = new Movie(
  "Forrest Gump",
  "6 July 1994 ",
  "./forrestgump.jpg",
  "8.8"
);

movieDatabase.push(lionKing);
movieDatabase.push(pursuit);
movieDatabase.push(insideOut);
movieDatabase.push(dragon);
movieDatabase.push(gump);
movieDatabase.push(avengers);
movieDatabase.push(fault);
movieDatabase.push(gravity);
movieDatabase.push(nun);

// Adding movie database to local storage
localStorage.setItem("movieData", JSON.stringify(movieDatabase));

// Creating the image source for carousel
var imgSources = [
  "./forrestgump.jpg",
  "./insideout.jpg",
  "./interstellar.jpg",
  "./pursuit.jpg",
  "./avengers.jpg",
  "./lionking.jpg",
  "./gravity.jpg",
  "./fault.jpg",
  "./nun.jpg",
];

function slideShow() {
  var carousel = document.createElement("div");
  carousel.className = "carousel-wrap";
  for (var i = 0; i < imgSources.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "img-slide");
    var imageEle = document.createElement("img");
    imageEle.setAttribute("src", imgSources[i]);

    div.appendChild(imageEle);
    carousel.appendChild(div);
  }
  document.body.insertBefore(
    carousel,
    document.getElementsByClassName("filter-wrap")[0]
  );
  activateSlideshow();
}

var myIndex = 0;
function activateSlideshow() {
  var x = document.getElementsByClassName("img-slide");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(activateSlideshow, 2000);
}

function movieGrid() {
  var movieCards = JSON.parse(localStorage.getItem("movieData"));

  var movieCont = document.createElement("div");
  movieCont.className = "movie-container";

  var movieWrap = document.createElement("div");
  movieWrap.className = "movie-wrap";

  for (var j = 0; j < movieCards.length; j++) {
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "movieCard");

    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var imgSrc = document.createElement("img");
    imgSrc.setAttribute("src", movieCards[j].poster);
    imgSrc.setAttribute("class", "posterImg");

    var h3 = document.createElement("h3");
    h3.textContent = movieCards[j].name;

    var p1 = document.createElement("p");
    p1.textContent = `Release : ${movieCards[j].release}`;

    var p2 = document.createElement("p");
    p2.textContent = `IMDB Rating : ${movieCards[j].imdb}`;

    card.appendChild(imgSrc);
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);

    imgDiv.appendChild(card);
    movieWrap.appendChild(imgDiv);
    movieCont.appendChild(movieWrap);
    document.body.appendChild(movieCont);
  }
}

document.getElementById("lowHigh-btn").addEventListener("click", function (e) {
  for (var k = 0; k < movieDatabase.length; k++) {
    for (var j = 0; j < movieDatabase.length - k - 1; j++) {
      if (Number(movieDatabase[j].imdb) > Number(movieDatabase[j + 1].imdb)) {
        var temp = movieDatabase[j];
        movieDatabase[j] = movieDatabase[j + 1];
        movieDatabase[j + 1] = temp;
      }
    }
  }
  localStorage.removeItem("movieData");
  localStorage.setItem("movieData", JSON.stringify(movieDatabase));

  document.getElementsByClassName("movie-container")[0].remove();
  movieGrid();
});

document.getElementById("highLow-btn").addEventListener("click", function (e) {
  for (var k = 0; k < movieDatabase.length; k++) {
    for (var j = 0; j < movieDatabase.length - k - 1; j++) {
      if (Number(movieDatabase[j].imdb) < Number(movieDatabase[j + 1].imdb)) {
        var temp = movieDatabase[j];
        movieDatabase[j] = movieDatabase[j + 1];
        movieDatabase[j + 1] = temp;
      }
    }
  }
  localStorage.removeItem("movieData");
  localStorage.setItem("movieData", JSON.stringify(movieDatabase));

  document.getElementsByClassName("movie-container")[0].remove();
  movieGrid();
});

window.addEventListener("load", function () {
  slideShow();
  movieGrid();
});
