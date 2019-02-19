// -------------------------- Home work --------------------------
// -------------------------- Еглевский Владислав Александрович --------------------------

//This. Задачи.

//1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};


const rectangle = {
    width: 5,
    height: 20,
    getSquare: function () {
        return this.width * this.height
    }
};


//2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5


const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getPriceWithDiscount: function () {
        return this.price * (1 - parseFloat(this.discount) / 100)
    }
};


//3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;


const object = {
    height: 10,
    increaseFunc: function () {
        return this.height += 1;
    }
};

//4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3


const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    }
};


//Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)


const productsInfo = {
    price: 50,
    productsAmount: 20,
    calcFinalPrice: function () {
        return this.price * this.productsAmount;
    }
};

//2. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const anotherProductsInfo = {
    price: 50,
    amount: 20,
    calculateFinalPrice: function () {
        return this.price * this.amount;
    }
};

const detailsInfo = {
    price: 20,
    amount: 5
};

const calcDetailsPrice = anotherProductsInfo.calculateFinalPrice.bind(detailsInfo);

//3. Даны объект и функция:
let sizes = {
    width: 5,
    height: 10
};

getSquare = function () {
    return this.width * this.height
};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

const getSqFromSizes = getSquare.call(sizes);


// 4.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let getElementHeight = element.getHeight.bind(element);


//Замыкания. Задачи.

//1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.


const minus = function (firstNumber = 0) {
    return function secondNumber(secondNumber = 0) {
        let result = firstNumber - secondNumber;
        return result;
    }
};


//2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(value) {
    let result = value;
    return function (multiplier) {
        return result *= multiplier;
    }
}

//3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5




const  strHandl = {

    str: '',

    setStr: function (str) {
        if (!str) {
            this.str = '';
        } else if (typeof(str) === 'number') {
            this.str = str + '';
        } else {
            this.str = str;
        }
    },

    getStr: function () { return this.str; },
    getStrLength: function () { return this.str.length; },
    getStrReverse: function () { return this.str.split('').reverse().join(''); }

};


//4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
//
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
//
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100



const calculator = {

    result: 0,

    setValue: function (value) {
        if (!value) {
            this.result = 0;
        } else if (typeof(value) != 'number') {
            alert('Введите число');
        } else {
            this.result = value;
        }

        return this;
    },

    plus: function (value) {

        this.result += value;

        return this;
    },

    minus: function (value) {

        this.result -= value;

        return this;
    },

    multiply: function (value) {

        this.result *= value;

        return this;
    },

    toSplit: function (value) {

        this.result /= value;

        return this;
    },

    power: function (value) {

        this.result = Math.pow(this.result, value);

        return this;
    },

    getValue: function () {

        let thMomentRes = this.result;
        thMomentRes = parseFloat(thMomentRes.toFixed(2));
        console.log(thMomentRes);

        return this;
    }

};



calculator.setValue(25).multiply(2).minus(20).getValue().toSplit(12).power(2).plus(20).getValue();



