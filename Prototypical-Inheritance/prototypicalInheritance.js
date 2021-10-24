// ! Constructors , new operator and Object.create

//*Grandparents Constructor
function Grandparents(fname, mname) {
  this.fname = fname;
  this.mname = mname;
}

//*A method is added to the prototype object of Grandparents
Grandparents.prototype.displayParents = function () {
  console.log(`Parents are ${this.fname} and ${this.mname}`);
};

//*Parents Constructor
function Parents(fname, mname) {
  this.fname = fname;
  this.mname = mname;
}

//*Inheriting GrandParents prototype to Parents
Parents.prototype = Object.create(Grandparents.prototype);
//*Since the Parents prototype is changed assigning the Parents Constructor back to its prototype
Parents.prototype.constructor = Parents;


//*Created an instance of Grandparents
var grandParents = new Parents("Ponnan", "Devu");

//*Creating instance of Parents
var parents = new Parents("Raja Ponnan", "Radha Raj");

//*Creating Daughter Constructor
function Daughter(name) {
  this.name = name;
  this.displayDetails = function () {
    console.log(" ");
    console.log(`My name is ${this.name}`);
    parents.displayParents();
    grandParents.displayParents();
    
  };
}

//*Inheriting the Parents prototype to Daughter
Daughter.prototype = Object.create(Parents.prototype);
Daughter.prototype.constructor = Daughter;

var daughter_elder = new Daughter("Aiswarya Raja");
var daughter_younger = new Daughter("Abhirami Raja");

daughter_elder.displayDetails();
daughter_younger.displayDetails();


console.log(" ");

console.log(
  daughter_elder.__proto__.__proto__.__proto__ === Grandparents.prototype
);
console.log(daughter_younger.__proto__.__proto__ === Parents.prototype);

console.log(daughter_elder);
