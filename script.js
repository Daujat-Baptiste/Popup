const popup = document.querySelector('.popup')
const close = document.querySelector('.close')
let cookies = document.cookie;
window.onload = function () {
    setTimeout(function () {
        popup.style.display = 'block'
    }, 2000)
}


close.addEventListener('click', () => {
    popup.style.display = "none"
})

