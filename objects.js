// --------- Task 1 -----------

const user = {
    name: "Tom",
    surname: "Reddle",
    mail: "tom.reddle.@gmail.com",
    pass: "qwerty1234",
    phone: "+420934567788",

    address: {
        city: "Kyiv",
        street: "Khreshchatyk",
        number: 10,
        flat: 456
    }
}

// --------- Task 2 -----------

function greetingUser(user) {
    return `Hey ${user.name} ${user.surname}`;
}

greetingUser(user)

// --------- Task 3 -----------

function getValueOfUser(user) {
    for(const value in user) {
        console.log(`${value}: ${user[value]}`);
    }

    for(const prop in user.address) {
        console.log(`${prop}: ${user.address[prop]}`);
    }
    
    return "success";
}

console.log(getValueOfUser(user));

// --------- Task 4 -----------

const car = {
    color: 'Black',
    model: 'Rs7',
    brand: 'Audi',
    engineCapacity: 3993,
    roominess: 5,
    speed: 100,
    maxSpeed: 250,

    accelerate: function(speedPerHour) {
        if(speedPerHour + this.speed > this.maxSpeed) {
            return this.maxSpeed;
        } else {
            return speedPerHour + this.speed;
        }
    },

    deaccelerate: function(speedPerHour){
        if(this.speed - speedPerHour < 0){
            return this.speed;
        } else {
            return this.speed - speedPerHour;
        }
    },

    stop: function(){
        return this.speed = 0;
    },
}

// --------- Task 5 -----------

function Car(
    color, model, brand, engineCapacity, roominess, speed, maxSpeed) {
        
        this.color = color;
        this.model = model;
        this.brand = brand,
        this.engineCapacity = engineCapacity;
        this.roominess = roominess;
        this.speed = speed;
        this.maxSpeed = maxSpeed;

        this.accelerate = function(speedPerHour){
            if(speedPerHour + this.speed > this.maxSpeed) {
                return this.maxSpeed;
            } else {
                return speedPerHour + this.speed;
            }
        }

        this.deaccelerate = function(speedPerHour) {
            if(this.speed - speedPerHour < 0){
                return this.speed;
            } else {
                return this.speed - speedPerHour;
            }
        }

        this.stop = function() {
            return this.speed = 0;
        }
}

const car1 = new Car("Red", "Sedan", "Toyota", 2693, 6, 60, 180);
const car2 = new Car("Blue", "SUV", "BMW", 2998, 7, 80, 220);
const car3 = new Car("Black", "Coupe", "Ford", 2261, 4, 100, 240);
const car4 = new Car("White", "Hatchback", "Mercedes", 1598, 5, 90, 200);
const car5 = new Car("Green", "Pickup", "Honda", 3195, 2, 70, 190);