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
let price = []; // масив усіх цін
// ціни порцій сиру
price[0] = 40, price[1] = 44, price[2] = 47, price[3] = 43, price[4] = 42, price[5] = 47, price[6] = 50, price[7] = 49;
// ціни порцій ковбас
price[8] = 38, price[9] = 39, price[10] = 36, price[11] = 40, price[12] = 39, price[13] = 37, price[14] = 38, price[15] =41, price[16] = 35, price[17] = 36;
// ціни порцій соусів
price[18] = 20, price[19] = 21, price[20] = 24, price[21] = 22;
// ціни порцій овочів
price[22] = 21, price[23] = 23, price[24] = 29, price[25] = 22, price[26] = 25, price[27] = 22;
// ціни заготовок
price[28] = 60, price[29] = 80, price[30] = 100;

let bread = false;  // змінна, яка показує, чи вибрали заготовку піци
let result = 0;     // ціна усієї піци разом
const res = document.getElementById('price');   // рядок для виведення ціни

// функції вибору заготовок піци
cheese_variety[28].addEventListener('click', selectBreadSmall);
cheese_variety[29].addEventListener('click', selectBreadMiddle);
cheese_variety[30].addEventListener('click', selectBreadBig);
const _bread = document.querySelector('.bread');
const text_area = document.querySelector('textarea');

function selectBreadSmall(){
    if(bread == false){
        bread = true;
        result += price[28];
        res.innerHTML = result;
        let size = document.createElement('div');
        size.setAttribute('id', 'size');
        size.innerHTML = 'Маленька';
        text_area.value = 'Маленька\n';
        _bread.appendChild(size);
    }
}
function selectBreadMiddle(){
    if(bread == false){
        bread = true;
        result += price[29];
        res.innerHTML = result;
        let size = document.createElement('div');
        size.setAttribute('id', 'size');
        size.innerHTML = 'Середня';
        text_area.value = 'Середня\n';
        _bread.appendChild(size);
    }
}
function selectBreadBig(){
    if(bread == false){
        bread = true;
        result += price[30];
        res.innerHTML = result;
        let size = document.createElement('div');
        size.setAttribute('id', 'size');
        size.innerHTML = 'Велика';
        text_area.value = 'Велика\n';
        _bread.appendChild(size);
    }
}

// функція кнопки відміни даного вибору
const cancel = document.getElementById('cancel');
cancel.addEventListener('click', cancelSelection);
function cancelSelection(){
    result = 0;
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
    alert('Заповніть форму нижче після завершення конструювання піци');
}

// функція добавки компонентів в піцу
let children = 0;
for(let i = 0; i < 28; i++){
    cheese_variety[i].addEventListener('click', addComponent);
    function addComponent(){
        if(bread == true){
            let clone = cheese_variety[i].cloneNode(true);
            text_area.value += cheese_variety[i].textContent;
            _bread.appendChild(clone);
            children++;
            result += price[i];
            res.innerHTML = result;
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