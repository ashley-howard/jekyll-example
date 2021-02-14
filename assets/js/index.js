const menuBtn = document.getElementById('menu-btn')

menuBtn.onclick = function () {
    if (menuBtn.classList.contains('closed')) {
        document.getElementsByTagName('nav')[0].style.display = "flex";
        menuBtn.classList.remove('closed');
        menuBtn.classList.add('opened');
    }
    else if (menuBtn.classList.contains('opened')) {
        document.getElementsByTagName('nav')[0].style.display = "none";
        menuBtn.classList.add('closed');
        menuBtn.classList.remove('opened');
    }
};