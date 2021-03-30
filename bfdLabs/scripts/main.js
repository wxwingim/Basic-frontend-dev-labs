let userName = undefined;

function zadanie() {
    if (userName == undefined) {
        userName = prompt('Введите ваше имя ', "");
        while (userName == "")
            {userName = prompt('Пожалуйста, введите ваше имя ', "");}
    }
    if (userName != undefined) {
    alert("Я это сделал, а " + userName+ " тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”");
    }
}

function buttonIn(event){
    let target = event.target;
    target.style.background = 'lightblue';
    target.style.color = '#1F3F68';
}
function buttonOut(event){
    let target = event.target;
    target.style.background = '';
    target.style.color = '';
}

if (document.getElementById('knopka') !== null) {
    knopka.onclick = zadanie;
    knopka.onmouseover = buttonIn;
    knopka.onmouseout = buttonOut;
}

if (document.getElementById('knopka') !== null) {
    knopka1.onclick = zadanie;
    knopka1.onmouseover = buttonIn;
    knopka1.onmouseout = buttonOut;
}