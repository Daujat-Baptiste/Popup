const popup = document.querySelector('.popup')
const close = document.querySelector('.close')
let cookies = document.cookie;
if (cookies == '') {
    document.cookie = "seen=true; path=/";
    cookies = document.cookie.split('; ').find(row => row.startsWith('seen='))
    cookies.split('=')[1];
}
if (cookies == 'true') {
    window.onload = function () {
        setTimeout(function () {
            popup.style.display = 'block'
        }, 2000)
    }
    //; max-age=15 temps expiration en sec
    document.cookie = "seen=false; path=/";
    cookies = document.cookie.split('; ').find(row => row.startsWith('seen='))
    cookies.split('=')[1];

    close.addEventListener('click', () => {
        popup.style.display = "none"
    })
}