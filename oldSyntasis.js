// const obj = {
//     key: "value",
//     method: function() {
//         return 'success'
//     }
// }

// function User() {
//     this.key1 = "value";
//     this.method = function() {
//         return 'success'
//     }
// }

// const user1 = new User()  //екземпляр об'єкта User
// const user2 = new User()  //екземпляр об'єкта User


// function User(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
// }

// function UserPrototype() {
//     this.getFullName = function() {
//         return `${this.name} ${this.lastName}`
//     }
// }

// User.prototype = new UserPrototype();

// // __proto__ - працює з об'єктами, які створюються літерально
// // .prototype - працює з конструторами

// const user1 = new User('John', 'Doe', 56);
// const user2 = new User('Jane', 'Priman', 44)