const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.mobile-menu')
const menuClose = document.querySelector('.close')
const navbar = document.querySelector('.nav')
const btns = document.querySelectorAll('.nav .ul .li .btn')
const mobileBtns = document.querySelectorAll('.nav .mobile-menu .li .mobile-btn')
const header = document.querySelector('header')
const project = document.querySelector('projects')
const contact = document.querySelector('contacts')

burger.addEventListener('click', function () {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    menuClose.classList.toggle('active')
})

btns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        // let btnColor = btn.getAttribute('data-color') 
        navbar.style.background = btn.getAttribute('data-color') 
    })
})

mobileBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        navbar.style.background = btn.getAttribute('data-color') 
    })
})