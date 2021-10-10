class Rectangle {
  constructor(l, b) {
    this.l = l;
    this.b = b;
  }
  getArea() {
      console.log(this.l*this.b);
  }
}

class Square extends Rectangle {
    constructor(b) {
        super(b, b);

    }
}


const sq = new Square(5);

sq.getArea();
