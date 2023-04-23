const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
openBtn.addEventListener('click', () => { nav.forEach(navEL => navEL.classList.add('visible')) })

closeBtn.addEventListener('click', () => { nav.forEach(navEL => navEL.classList.remove('visible')) })

console.log(openBtn)