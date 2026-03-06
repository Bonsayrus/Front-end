// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися.
// Якщо нам потрібно зробити кілька послідовних викликів.

// Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
// ladder.up().up().down().showStep(); // 1
// Такий підхід широко використовується в бібліотеках JavaScript.


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
  },
    down() {
        this.step--;
        return this;
  },
     showStep: function () {
        console.log(this.step);
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

ladder.up().up().down().down().up().up().up().up().down().showStep(); // 4