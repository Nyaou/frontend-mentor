var firstName = document.getElementById('f-name')

var lastName = document.getElementById('l-name')

var email = document.getElementById('email')

var senha = document.getElementById('senha')

var formulario = document.getElementById('form')

formulario.onsubmit = e => {
    
    var alertFName = document.getElementById('alertFName')

    var alertLName = document.getElementById('alertLName')

    var alertEmail = document.getElementById('alertEmail')

    var alertSenha = document.getElementById('alertSenha')

    if(firstName.value == ''){
        alertFName.textContent = 'first name cannot by empty'
        firstName.style.borderColor = 'red'
        e.preventDefault()
    }else{
        alertFName.textContent = 'Ok'
        alertFName.style.color = 'green'
        alertFName.style.fontWeight = 'bolder'
        firstName.style.borderColor = 'green'
    }

    if(lastName.value == ''){    
        alertLName.textContent = 'Last name cannot by empty'
        lastName.style.borderColor = 'red'
        
        e.preventDefault()
    }else{
        alertLName.textContent = 'Ok'
        alertLName.style.color = 'green'
        alertLName.style.fontWeight = 'bolder'
        lastName.style.borderColor = 'green'
    }

    if(email.value == ''){       
        alertEmail.textContent = 'Looks like this is not an email'
        email.style.borderColor = 'red'
        email['placeholder'] = 'email@example'
        e.preventDefault()
    }else{
        alertEmail.textContent = 'Ok'
        alertEmail.style.color = 'green'
        alertEmail.style.fontWeight = 'bolder'
        email.style.borderColor = 'green'
    }

    if(senha.value == ''){
        alertSenha.textContent = 'password cannot by empty'
        senha.style.borderColor = 'red'
        e.preventDefault()
    }else{
        alertSenha.textContent = 'Ok'
        alertSenha.style.color = 'green'
        alertSenha.style.fontWeight = 'bolder'
        senha.style.borderColor = 'green'
    }
}