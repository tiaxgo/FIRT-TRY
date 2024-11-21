const changeThemeBtn =  document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");

})

/* abaixo menu com overlay versao mobile*/ 

let btnMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
