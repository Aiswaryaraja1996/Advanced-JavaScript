var itemsList = [
  {
    src: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Big-Mac.jpg?$Category_Desktop$",
    name: "Big Mac",
  },
  {
    src: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg?$Category_Desktop$",
    name: "Quarter Pounder with Cheese",
  },
  {
    src: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-McDouble.jpg?$Category_Desktop$",
    name: "McDouble",
  },

  {
    src: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-oreo-mcflurry-snack.jpg?$Category_Desktop$",
    name: "McFlurry Oreo",
  },
  {
    src: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Strawberry-McCafe-Shake-Medium.jpg?$Category_Desktop$",
    name: "Strawberry Shake",
  },
  {
    src: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Hot-Caramel-Sundae.jpg?$Category_Desktop$",
    name: "Hot Caramel Sundae",
  },
];

document.getElementById("order").addEventListener("click", function (e) {
  e.preventDefault();
  var checkBox = document.getElementsByName("item");
  var itemsChecked = [];
  for (var i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      itemsChecked.push(checkBox[i].value);
    }
  }

  generateInvoice().then(function (response) {
    alert(response + "Please verify your order .");

    displayOrder(itemsChecked);
  });
});

function generateInvoice() {
  return new Promise(function (resolve, reject) {
    const id = setTimeout(function () {
      resolve("Order Received Successfully !! . ");
    }, 5000);
  });
}

function displayOrder(listSelected) {
  document.getElementsByClassName("menu-container")[0].style.display = "none";
  var orderid = Math.floor(1000 + Math.random() * 2);
  document.getElementById("order-id").textContent = `Order Id : ${orderid}`;

  for (var i = 0; i < listSelected.length; i++) {
    for (var j = 0; j < itemsList.length; j++) {
      if (listSelected[i] === itemsList[j].name) {
        displayCards(itemsList[j]);
      }
    }
  }
}

function displayCards(items) {
  const div = document.createElement("div");
  div.className = "card-container";

  const div2 = document.createElement("div");
  div2.className = "card";

  const img = document.createElement("img");
  img.src = items.src;

  const h3 = document.createElement("h3");
  h3.textContent = items.name;

  div2.append(img, h3);
  div.append(div2);

  document.getElementsByClassName("order-details")[0].append(div);
}
