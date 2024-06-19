class Human {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  getInfo() {
    console.log(
      `Имя ${this.name}, возраст ${this.age}, страна ${this.country}`
    );
  }
}

const human1 = new Human("Илья", 20, "Беларусь");
const human2 = new Human("Андрей", 21, "Беларусь");

console.log(human1);
human1.getInfo();
console.log(human2);
human2.getInfo();
