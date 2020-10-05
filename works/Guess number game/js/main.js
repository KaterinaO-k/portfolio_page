window.onload = function () {
    let body = document.getElementById("body");
    let letsgo = document.getElementsByClassName("letsgo")[0];
    let btn = document.getElementsByClassName("btn")[1];
    let intro = document.getElementsByClassName("intro")[0];
    let guess = document.getElementsByClassName("guess")[0];
    let less = document.getElementsByClassName("less")[0];
    let more = document.getElementsByClassName("more")[0];
    let win = document.getElementsByClassName("win")[0];
    let cheater = document.getElementsByClassName("cheater")[0];
    let bye = document.getElementsByClassName("bye")[0];
    let input = document.getElementsByTagName("input")[0];
    let message = document.createElement("p");
    let random = getRandom();

    let start = setInterval(showInvite, 500);
    function showInvite() {
        body.style.fontSize = parseInt(getComputedStyle(body).fontSize) + 1 + 'px';
        console.log(body.style.fontSize);
    };

    letsgo.onclick = function () {
        clearInterval(start);
        intro.classList.add("container2");
        guess.classList.remove("container2");
        body.style.fontSize = "40px";
    };

    function getRandom() {
        let rand = 1 + Math.random() * 100;
        return Math.floor(rand);
    }
    function returnToGuess() {
        more.classList.add("container2");
        less.classList.add("container2");
        cheater.classList.add("container2");
        guess.classList.remove("container2");
    }

    console.log(random);
    btn.addEventListener("click", compareNr)
    function compareNr() {
        if (input.value > random) {
            guess.classList.add("container2");
            more.classList.remove("container2");
            message.innerHTML = "Загаданное значение МЕНЬШЕ введенного Вами. Попробуйте ввести другое число. <br> <img style='width:100px' src='img/loading.gif'>";
            message.classList.add("bart_says");
            setTimeout(returnToGuess, 3000);

        } else if (input.value < random) {
            guess.classList.add("container2");
            less.classList.remove("container2");
            message.innerHTML = "Загаданное значение БОЛЬШЕ введенного Вами. Попробуйте ввести другое число. <br><img style='width:100px' src='img/loading.gif'>";
            message.classList.add("bart_says");
            setTimeout(returnToGuess, 3000);

        } else if (input.value == random) {
            guess.classList.add("container2");
            win.classList.remove("container2");
            message.textContent = "Ура! Вы угадали!";
            message.classList.add("bart_says");
            congratulate();
            function congratulate() {
                let color = 0;
                setInterval(function () {
                    color = color + 1 % 360;
                    body.style.color = "hsl(" + color + ", 100%, 50%)";
                }, 5);
            }
            let yes = document.getElementById("yes");
            let no = document.getElementById("no");
            yes.onclick = function () { location.reload(true) };
            no.onclick = function () {
                win.classList.add("container2");
                bye.classList.remove("container2");
                message.textContent = '';
            }
        }

        else {
            guess.classList.add("container2");
            cheater.classList.remove("container2");
            message.innerHTML = "Мы так не договаривались. Введите ЧИСЛО от 1 до 100. <br> <img style='width:100px' src='img/loading.gif'>";
            message.classList.add("bart_says");
            setTimeout(returnToGuess, 3000);
        }
        body.appendChild(message);
    }
}