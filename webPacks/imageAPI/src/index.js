import { createApi } from "unsplash-js";
import Navbar from "./header.js";

const unsplash = createApi({
  accessKey: "moE7Lqp87LSGPKqDWpltxt1vKKGtrukoJx9pJtDgIJk",
});

function PhotoDetails(id, desc, url, likes) {
  this.id = id;
  this.desc = desc;
  this.url = url;
  this.likes = likes;
}

var photoCollection = [];

var container = document.querySelector(".container");
document.getElementById("header").innerHTML = Navbar();
const debounce = debouncer(fetchPosts,1000);
const btn = document.getElementById("btnSearch");

var imgModal = document.querySelector(".img-content");
var modal = document.querySelector(".modal");
var navbar = document.getElementById("navbar");

var queryText = document.getElementById("searchText");

queryText.addEventListener("keyup", function(){
  photoCollection = [];
  container.innerHTML = null;
  debounce();
});



function debouncer(fn, delay) {
  let id;
  return function () {
    id && clearTimeout(id);
    id = setTimeout(function () {
      fn();
    }, delay);
  };
}

function fetchPosts() {
  console.log(1);
  container.innerHTML = null;
  let q = document.getElementById("searchText").value;
  unsplash.search
    .getPhotos({
      query: `${q}`,
      page: 1,
      perPage: 15,
      orientation: "portrait",
    })
    .then((result) => {
      if (result.errors) {
        console.log("error occurred: ", result.errors[0]);
      } else {
        const photo = result.response;
        // console.log(photo.results);
        displayPhotos(photo.results);

      }
    });
};

navbar.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("searchText").value = null;
  console.log(event.target.textContent);
  container.innerHTML = null;
  unsplash.search
    .getPhotos({
      query: `${event.target.textContent}`,
      page: 1,
      perPage: 15,
      orientation: "portrait",
    })
    .then((result) => {
      if (result.errors) {
        console.log("error occurred: ", result.errors[0]);
      } else {
        const photo = result.response;
        displayPhotos(photo.results);
      }
    });
});

function displayPhotos(photos) {
  // console.log(photos);
  container.innerHTML = null;
  var card1 = document.createElement("div");
  card1.className = "column";
  var card2 = document.createElement("div");
  card2.className = "column";
  var card3 = document.createElement("div");
  card3.className = "column";

  for (var i = 0; i < photos.length; i++) {
    if (i < 5) {
      var column1 = createCard(photos[i]);
      card1.append(column1);
    } else if (i >= 5 && i < 10) {
      var column2 = createCard(photos[i]);
      card2.append(column2);
    } else if (i >= 10 && i < 15) {
      var column3 = createCard(photos[i]);
      card3.append(column3);
    }
  }
  container.append(card1, card2, card3);

  const photoList = document.getElementsByClassName("photo");
  // console.log(photoList);
  for (const photo of photoList) {
    photo.addEventListener("click", () => {
      modalPop(photo);
    });
  }
}

function createCard(photo) {
  var p = new PhotoDetails(
    photo.id,
    photo.alt_description,
    photo.urls.small,
    photo.likes
  );
  photoCollection.push(p);
  const img = document.createElement("img");
  img.src = photo.urls.regular;
  img.className = "photo";
  img.id = photo.id;
  return img;
}

function modalPop(pic) {
  // console.log(pic.getAttribute("id"));
  modal.style.display = "block";
  // console.log(photoCollection);
  for (var j = 0; j < photoCollection.length; j++) {
    if (photoCollection[j].id === pic.getAttribute("id")) {
      var img = document.createElement("img");
      img.src = photoCollection[j].url;

      var h3 = document.createElement("h3");
      h3.textContent = photoCollection[j].desc;

      imgModal.append(img, h3);
      break;
    }
  }
}

document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
  document.getElementsByClassName("img-content")[0].innerHTML = null;
});
