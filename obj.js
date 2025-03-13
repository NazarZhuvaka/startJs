// Task 1

class Book{
    constructor(author, title, year, pageNum, shelfNum=null, userId=null){
        this.author = author;
        this.title = title;
        this.year = year;
        this.pageNum = pageNum;
        this._shelfNum = shelfNum;
        this._userId = userId;
    }

    isVacant() {
        if (this._userId === null) {
            return true
        }
        return false
    }

    getRent(id) {
        if (typeof id !== Number){
            throw new TypeError('Id must be a number')
        }

        if (id < 1) {
            throw new RangeError('Id cann`t be less than 1')
        }
        
        if(this.isVacant()) {
            this._shelfNum = null;
            this._userId = id;
            return `${this.title} issued to the user with ID ${userId}`
        }

        return `Book ${this.title} is already issued!`

    }
}

class User {
    constructor(id, firstName, lastName, adress) {
        if (id < 1) {
            throw new RangeError('Id cann`t be less than 1')
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
    }
}

const book1 = new Book("Тарас Шевченко", "Кобзар", 1840, 300, 5);
const user1 = new User(1, "Іван", "Петренко", "Київ, вул. Шевченка, 10");

console.log(book1.isVacant());
book1.getRent(user1.id);
console.log(book1.isVacant());

// Task 2


class Animal{
    constructor (name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    hunting() {
        console.log('Зараз дожену здобич');
    }

    growl() {
        console.log('грррррр');
    }
}

class Wolf extends Animal{
    constructor(name, age, weight, packSize){
        super(name, age, weight);
        this.packSize = packSize;
    }

    hunting() {
        console.log('Вовк з’їсть тебе');
    }
}

class Tiger extends Animal{
    constructor(name, age, weight, stripeCount) {
        super(name, age, weight);
        this.stripeCount = stripeCount;
    }

    hunting() {
        console.log('Тигр з’їсть тебе');
    }
}


const tiger1 = new Tiger("Шерхан", 5, 200, 80);
const tiger2 = new Tiger("Ричард", 4, 190, 75);
const wolf1 = new Wolf("Альфа", 6, 70, 10);
const wolf2 = new Wolf("Бета", 5, 65, 8);

tiger1.hunting();
tiger1.growl();

wolf1.hunting();  
wolf1.growl(); 

tiger2.hunting(); 
tiger2.growl();

wolf2.hunting();
wolf2.growl(); 