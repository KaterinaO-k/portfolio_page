let subscribeBtn = document.querySelector('#subscribe');
let subscribeAlert = document.querySelector('.footer__about-subscribe-alert');
let map = document.querySelector('.map');
let modal = document.querySelector('.map__modal');

subscribeBtn.addEventListener('click', function () {
    subscribeAlert.style.display = 'block';
})

map.addEventListener('click', function showMap() {
    modal.style.display = "block";

    let close = document.querySelector('.map__close');
    close.onclick = function (e) {
        modal.style.display = "none";
        e.stopPropagation();
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})

