// Define base image path
const IMG_PATH = 'img/';

// Class for creating car objects
class Car {
    constructor(name, imgSrc) {
        this.clickCount = 0;
        this.name = name;
        this.imgSrc = IMG_PATH + imgSrc;
    }
}

// Model
const carModel = {
    currentCar: null,
    cars: [
        new Car('Coupe Maserati', 'black-convertible-coupe.jpeg'),
        new Car('Camaro SS 1LE', 'chevrolet-camaro.jpeg'),
        new Car('Dodger Charger 1970', 'dodge-charger.jpeg'),
        new Car('Ford Mustang 1966', 'ford-mustang.jpeg'),
        new Car('190 SL Roadster 1962', 'mercedes-benz.jpeg'),
    ]
};

// Controller
const carController = {
    init() {
        carModel.currentCar = carModel.cars[0];
        carListView.init();
        carView.init();
    },

    getCurrentCar() {
        return carModel.currentCar;
    },

    getCars() {
        return carModel.cars
    },

    setCurrentCar(car) {
        carModel.currentCar = car;
    },

    incrementCounter() {
        carModel.currentCar.clickCount++;
        console.log(carModel.currentCar.clickCount);
        carView.render();
    }
};

// Car View
const carView = {
    init() {
        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');

        this.render();
    },

    clickHandler() {
        return carController.incrementCounter();
    },

    render() {
        const currentCar = carController.getCurrentCar();
        this.countElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    },
};

// Car List View
const carListView = {
    init() {
        this.carListElem = document.getElementById('car-list');
        this.render();
    },

    render() {
        let car, elem;
        const cars = carController.getCars();
        this.carListElem.innerHTML = '';
        for(let i = 0; i < cars.length; i++) {
            car = cars[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            elem.addEventListener('click', (function(carCopy) {
                return function() {
                    carController.setCurrentCar(carCopy);
                    carView.render();
                }
            })(car));
            this.carListElem.appendChild(elem);
        }
    }
};

// Execution
carController.init();