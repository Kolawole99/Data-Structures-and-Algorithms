const person = {
    firstName: "Max",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    greet() {
        console.log(this.age);
    },
};

console.log(person["firstName"]);
console.log(person.firstName);

person.human = "personal";

delete person.age;

person.greet();
