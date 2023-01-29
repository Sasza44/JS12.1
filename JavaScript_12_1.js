"use strict";

// Написання функцій стрілкам
const arrow = document.querySelectorAll('.arrow');

arrow[0].addEventListener('click', openCheeseVarieties);
function openCheeseVarieties(){
    openVarieties(0);
}
arrow[1].addEventListener('click', openMeatVarieties);
function openMeatVarieties(){
    openVarieties(1);
}
arrow[2].addEventListener('click', openSauceVarieties);
function openSauceVarieties(){
    openVarieties(2);
}
arrow[3].addEventListener('click', openVegetablesVarieties);
function openVegetablesVarieties(){
    openVarieties(3);
}
arrow[4].addEventListener('click', openSizes);
function openSizes(){
    openVarieties(4);
}

const cheese_varieties = document.querySelectorAll('.cheese_varieties'); // список, який можна відкривати/закривати

let press_arrow = [];               // масив змінних, кожен елемент якого показує, чи була натиснута відповідна стрілка

for(let i = 0; i < arrow.length; i++){
    press_arrow[i] = false;
}
// Функція, яка відкриває чи закриває список
function openVarieties(n){
    if(press_arrow[n] == false){
        press_arrow[n] = true;
        arrow[n].innerHTML = '&#8659';
        cheese_varieties[n].style.display = 'block';
    }
    else if(press_arrow[n] == true){
        press_arrow[n] = false;
        arrow[n].innerHTML = '&#8658';
        cheese_varieties[n].style.display = 'none';
    }
}
// Ціни на компоненти піци
const cheese_variety = document.querySelectorAll('.cheese_variety');
let price = []; // масив усіх цін. Якщо який-небудь компонент поки відсутній, його ціна встановлюється нульовою.
// ціни порцій сирів
let price1 = [];
price1[0] = 40; // сир Пекоріно
price1[1] = 44; // сир Гауда
price1[2] = 47; // сир Пармезан
price1[3] = 43; // сир Чеддер
price1[4] = 42; // сир Маасдам
price1[5] = 47; // сир Гарроча
price1[6] = 50; // сир Конте
price1[7] = 49; // сир Рікота
// ціни порцій ковбас
let price2 = [];
price2[0] = 38; // Сом
price2[1] = 39; // Лосось
price2[2] = 36; // Шинка елітна
price2[3] = 40; // Шинка Царська
price2[4] = 39; // Буженина домашня
price2[5] = 37; // Ковбаса Президентська
price2[6] = 38; // Ковбаса Орнамент
price2[7] = 41; // Шинка Розкіш
price2[8] = 35; // Ковбаса Гетьманська
price2[9] = 36; // Ковбаса Монблан
// ціни порцій соусів
let price3 = [];
price3[0] = 20; // Томатний
price3[1] = 21; // Овочевий
price3[2] = 24; // Вершковий
price3[3] = 22; // З червоним вином
// ціни порцій овочів
let price4 = [];
price4[0] = 21; // Кукурудза
price4[1] = 23; // Цибуля
price4[2] = 29; // Ананас
price4[3] = 22; // Гриби
price4[4] = 25; // Перець
price4[5] = 22; // Томати чері

// об'єднуємо масиви усіх цін в один
for(let i = 0; i < price1.length; i++){
    price.push(price1[i]);
}
for(let i = 0; i < price2.length; i++){
    price.push(price2[i]);
}
for(let i = 0; i < price3.length; i++){
    price.push(price3[i]);
}
for(let i = 0; i < price4.length; i++){
    price.push(price4[i]);
}

let price_small = 60;                   // ціна малої заготовки піци
let price_middle = 80;                  // ціна середньої заготовки піци
let price_big = 100;                    // ціна великої заготовки піци

let bread = false;                              // змінна, яка показує, чи вибрали заготовку піци
let result = 0;                                 // ціна усієї піци разом
const res = document.getElementById('price');   // рядок для виведення ціни

// функції вибору заготовок піци
cheese_variety[cheese_variety.length - 3].addEventListener('click', selectBreadSmall);
cheese_variety[cheese_variety.length - 2].addEventListener('click', selectBreadMiddle);
cheese_variety[cheese_variety.length - 1].addEventListener('click', selectBreadBig);
const _bread = document.querySelector('.bread');
const text_area = document.querySelector('textarea');
let bread_price = 0;
let size = undefined;
function selectBreadSmall(){
    selectBread('Маленька');
}
function selectBreadMiddle(){
    selectBread('Середня');
}
function selectBreadBig(){
    selectBread('Велика');
}
function selectBread(bread_size){
    if(bread == false && acception == false){
        bread = true;
        switch(bread_size){
            case 'Маленька':
                result += price_small;
                bread_price = price_small;
                break;
            case 'Середня':
                result += price_middle;
                bread_price = price_middle;
                break;
            case 'Велика':
                result += price_big;
                bread_price = price_big;
                break;
        }
        res.innerHTML = result;
        size = document.createElement('div');
        size.setAttribute('id', 'size');
        size.innerHTML = bread_size;
        _bread.appendChild(size);
    }
    if(bread == true && acception == false){
        switch(bread_size){
            case 'Маленька':
                result -= bread_price;
                result += price_small;
                bread_price = price_small;
                break;
            case 'Середня':
                result -= bread_price;
                result += price_middle;
                bread_price = price_middle;
                break;
            case 'Велика':
                result -= bread_price;
                result += price_big;
                bread_price = price_big;
                break;
        }
        res.innerHTML = result;
        size.innerHTML = bread_size;
    }
}

// функція кнопки відміни даного вибору
let children = 0;
let acception = false;
const cancel = document.getElementById('cancel');
cancel.addEventListener('click', cancelSelection);
function cancelSelection(){
    result = 0;
    acception = false;
    text_area.value = '';
    res.innerHTML = result;
    if(bread == true){
        _bread.removeChild(document.querySelector('#size'));
        bread = false;
    }    
    while(children != 0){
        _bread.removeChild(document.querySelector('.cheese_variety'));
        children--;
    } 
}

// функція кнопки "Оформити замовлення"
const accept = document.getElementById('accept');
accept.addEventListener('click', acceptSelection);
function acceptSelection(){
    if(acception == false){
        acception = true;
        alert('Заповніть форму нижче після завершення конструювання піци');
        let text_area_copy = text_area.value;
        text_area.value = size.innerHTML;
        text_area.value += text_area_copy;
        text_area.value += '\n';
        text_area.value += result;
    }
}

// функція добавки компонентів в піцу
let clone = undefined;
for(let i = 0; i < price.length; i++){
    cheese_variety[i].addEventListener('click', addComponent);
    function addComponent(){
        if(bread == true && acception == false && price[i] != 0){
            clone = cheese_variety[i].cloneNode(true);
            text_area.value += cheese_variety[i].textContent;
            _bread.appendChild(clone);
            result += price[i];
            res.innerHTML = result;
            children++;
        }
        if(bread == true && acception == false && price[i] == 0){
            alert('Компонент тимчасово відсутній');
        }
    }
}

// втеча кнопки "Отримати знижку"
let discount = document.getElementById('discount');
let x = discount.getBoundingClientRect().left;
let y = discount.getBoundingClientRect().top;
let discount_w = discount.getBoundingClientRect().width;
let discount_h = discount.getBoundingClientRect().height;

_bread.addEventListener('mousemove', button_escape);
function button_escape(){
    if(event.clientX >= x && event.clientX <= (x + discount_w) && event.clientY >= y && event.clientY <= (y + discount_h)){
        discount.style.marginLeft = Math.floor(Math.random() * (window.screen.width * 0.5 - discount_w)) + 'px';
        discount.style.marginTop = Math.floor(Math.random() * (700 - discount_h)) + 'px';
        x = discount.getBoundingClientRect().left;
        y = discount.getBoundingClientRect().top;
    }
}