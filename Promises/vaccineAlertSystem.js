const mainQueue = [
  { name: "Thomas", age: "65" },
  { name: "Antony", age: "26" },
  { name: "Rohan", age: "23" },
  { name: "Syed", age: "30" },
  { name: "Kusuma", age: "28" },
];

var vaccineCount = 20;
var countEle = document.getElementById("count");
countEle.textContent = vaccineCount;
var pcountEle = document.getElementById("pCount");
pcountEle.textContent = mainQueue.length;

window.addEventListener("load", function () {
  var btnSubmit = document.getElementById("submit");
  btnSubmit.addEventListener("click", registerUser);
});

function checkQueue(name) {
  return new Promise(function (resolve, reject) {
    const id = setInterval(function () {
      if (mainQueue[0].name === name) {
        resolve(`${name} , Its your turn, Please carry you valid ID proof .`);
        clearInterval(id);
      }
    }, 1000);
  });
}

function registerUser(event) {
  event.preventDefault();

  var indvUser = {};
  let msg = `There are ${mainQueue.length} persons before you. Please wait for your turn.`;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  indvUser.name = name;
  indvUser.age = age;

  if (Number(age) > 60) {
    mainQueue.unshift(indvUser);
    alert(
      "Thank you for Registering. You can stand in the front of the queue ."
    );
  } else {
    mainQueue.push(indvUser);
    alert("Thank you for Registering. " + msg);
  }

  displayUser();
  document.getElementById("name").value = null;
  document.getElementById("age").value = null;

  checkQueue(name)
    .then(function (msg) {
      alert(msg);
    })
    .catch(function (err) {
      alert(err);
    });
}

function displayUser() {
  const qContainer = document.getElementsByClassName("users")[0];
  qContainer.innerHTML = "";
  const ul = document.createElement("ul");
  for (var i = 0; i < mainQueue.length; i++) {
    const li = document.createElement("li");
    li.textContent = mainQueue[i].name;
    ul.append(li);
  }
  qContainer.append(ul);
}

displayUser();

// This function is called every 5s
function vaccinate() {
  mainQueue.shift();

  vaccineCount--;
  countEle.textContent = vaccineCount;
  pcountEle.textContent = mainQueue.length;

  if (vaccineCount === 0) {
    countEle.style.color = "Red";
    alert("Vaccine out of stock . Please visit tomorrow .");
    clearInterval(id);
  }
  if (mainQueue.length === 0) {
    clearInterval(id);
  }
  displayUser();
}

const id = setInterval(vaccinate, 5000);
