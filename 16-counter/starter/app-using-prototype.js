function Counter(element, value) {
  this.counter = document.querySelector(element);
  this.resetValue = value;
  this.value = value;
  this.resetBtn = this.counter.querySelector(".reset");
  console.log(this.resetBtn);
  this.increaseBtn = this.counter.querySelector(".increase");
  this.decreaseBtn = this.counter.querySelector(".decrease");
  this.valueDOM = this.counter.querySelector(".value");
  //   console.log(this.valueDOM, this.value);
  this.valueDOM.textContent = this.value;

  //bind this to all functions
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  //add event listener to each button

  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = this.resetValue;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(".first-counter", 100);
const secondCounter = new Counter(".second-counter", 200);
