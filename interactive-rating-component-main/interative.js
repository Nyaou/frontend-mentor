var rating = document.getElementById('rating')

var thanks = document.getElementById('thanks')
thanks.style.display = 'none'

var button = document.getElementById('button')

var numbers = document.getElementsByClassName('number')

var numberSelect = {check:false, number: null}

var mensage = document.getElementById('mensage')
for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',selectedNumber)
}
function selectedNumber(event){
    var checkNumber = event.target.innerHTML
    numberSelect.check = true
    numberSelect.number = checkNumber
    numbers[checkNumber - 1].style.background = 'hsl(25, 97%, 53%)'
    numbers[checkNumber - 1].style.color = 'white'
}
function submit(){
    if(numberSelect.check == false){
        console.log('selecione um numero')
    }else{
        thanks.style.display = 'block'
        mensage.textContent = `You selected ${numberSelect.number} out of 5`
        rating.style.display = 'none'
    }
    
}



button.addEventListener('click',submit)