// скрипт за инфу по бизам
const users = Array.from(document.querySelectorAll('.blip'));
const triggers = users.map(item => item.querySelector('.trigger')); 

triggers.forEach((item, i) => { // проходимся по каждому тригеру
  item.addEventListener('click', (e) => { // ставим на него слушатель события клика
    users[i].classList.toggle('active'); // что-то делаем   
  });
});

function closeMenu() {
    document.getElementById("sidebar").classList.toggle('active')
    document.getElementById("sidebar_arrow").classList.toggle('active')
    document.getElementById("operation").classList.toggle('active')
}

function openMenuHeader() {
    document.getElementById("InfoHeader").classList.toggle('active')
    document.getElementById("header_arrow").classList.toggle('active')
}

function openMenuAbout() {
    document.getElementById("InfoAbout").classList.toggle('active')
    document.getElementById("about_arrow").classList.toggle('active')
}

function CloseMenuBusiness() {
    const busuness = Array.from(document.querySelectorAll('.busuness'));

    busuness.forEach((item, i) => { // проходимся по каждому тригеру
        busuness[i].classList.toggle('active_button_busuness'); // что-то делаем   
    });
}
