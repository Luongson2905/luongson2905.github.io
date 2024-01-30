const transition = 5;
const correct = [1,1,1,1, 3, 5,5,5];
const gifts = [
    "Chúc bạn may mắn lần sau 1",
    "Nồi cơm điện",
    "Ấm siêu tốc",
    "Nồi chiên không dầu",
    "Chúc bạn may mắn lần sau",
    "Nồi cơm điện",
    "Ấm siêu tốc",
    "GĐB:TIVI SAMSUNG 43 INCH",
];
const container = document.querySelector(".wapper");
const btn = document.getElementById("spin");
const result = document.querySelector(".result");
const SEGMENT = 45;
let pause = false;
let rotate = 0;
let current = 1;

document.addEventListener("DOMContentLoaded", start());

function start() {
    gifts.forEach((element, index) => {
        let div = document.createElement("div");
        div.innerHTML = "<p>" + element + "</p>";
        div.style.backgroundColor = getRandomColor();
        div.style.transform = "rotate(" + SEGMENT * index + "deg)";
        container.appendChild(div);
    });
    container.style.transition = transition + "s";
    console.log(gifts[(rotate / SEGMENT) % 8]);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.onclick = function () {
    if (!pause) {
        let number = getRandomNumber();
        let diff = number - current;
        let rol;
        if (diff < 0) rol = (gifts.length + rol) * SEGMENT + 3600;
        else rol = diff * SEGMENT + 3600;
        rotate += rol;
        container.style.transform = "rotate(-" + rotate + "deg)";
        console.log(number, (number - 1) * SEGMENT, ((rotate / SEGMENT) % 8) + 1);
        setTimeout(() => {
            pause = false;
        }, transition + 500);
        pause = true;
    }
};

function getRandomNumber() {
    let number = Math.ceil(Math.random() * correct.length - 1);
    return correct[number % correct.length];
}
