const container = document.querySelector(".wapper");
const btn = document.getElementById("spin");
const result = document.querySelector(".result");
const gifts = [
    "Chúc bạn may mắn lần sau",
    "Nồi cơm điện",
    "Ấm siêu tốc",
    "Nồi chiên không dầu",
    "Chúc bạn may mắn lần sau",
    "Nồi cơm điện",
    "Ấm siêu tốc",
    "GĐB:TIVI SAMSUNG 43 INCH",
];
const correct = [1, 3, 5, 6, 7];
const SEGMENT = 45;
let pause = false;
let rotate = 0;

document.addEventListener("DOMContentLoaded", start());

function start() {
    gifts.forEach((element, index) => {
        let div = document.createElement("div");
        div.innerHTML = "<p>" + element + "</p>";
        div.style.backgroundColor = getRandomColor();
        div.style.transform = "rotate(" + SEGMENT * index + "deg)";
        container.appendChild(div);
    });
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
        rotate += number * SEGMENT + 3600;
        container.style.transform = "rotate(-" + rotate + "deg)";
        console.log(number, rotate, ((rotate / SEGMENT) % 8) + 1);
        setTimeout(() => {
            pause = false;
        }, 10500);
        pause = true;
    }
};

function getRandomNumber() {
    let number;
    let index;
    do {
        number = Math.ceil(Math.random() * 8);
        index = (((rotate + number * SEGMENT) / SEGMENT) % 8) + 1;
    } while (!correct.includes(index));
    return number;
}
