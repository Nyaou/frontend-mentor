var menuOpenClose = document.getElementById('menu-mobile')

var menu = document.getElementById('menu')

var countClick = 0

function menuMobile(){
    
    if(countClick == 0){
        menu.style.display = 'block'
        countClick += 1
        console.log('abriu o menu')
    }else{
        menu.style.display = 'none'
        countClick -= 1
        console.log('fechou o menu')
    }
}

menuOpenClose.addEventListener('click',menuMobile)

menu.addEventListener('click',menuMobile)