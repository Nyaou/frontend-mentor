function menuMobile(){
    var menu = document.getElementById('menu')
    var iconeMenu = document.getElementById('menu-mobile')
    if (menu.style.display === "block") {
        menu.style.display = "none";
        iconeMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z"/></g></g></svg>'
    }else{
        menu.style.display = "block";
        iconeMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z"/><path d="M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z"/></g></g></svg>'
    }
}