class Phone {
  // props
  constructor(id, model, color, price) {
    this.id = id;
    this.model = model;
    this.color = color;
    this.price = price;
  }
  // methods
  getCall() {
    console.log("somebody is calling...");
  }
  dial(phoneNumber) {
    console.log("dialing " + phoneNumber);
  }
}

var sony = new Phone()
