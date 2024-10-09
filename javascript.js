function pegarTipoString() {
    const upperCase = document.getElementById('include_uppercase').checked
    const lowerCase = document.getElementById('include_lowercase').checked
    const checkedNumber = document.getElementById('include_number').checked
    const special = document.getElementById('include_special').checked

    const tiposChar = [];

    if (upperCase) {
        tiposChar.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }
    
    if (lowerCase) {
        tiposChar.push('abcdefghijklmnopqrstuvwxyz')
    }
    
    if (checkedNumber) {
        tiposChar.push('0123456789')
    }
    
    if (special) {
        tiposChar.push('!@#')
    }

    return tiposChar;

}

function getPassowordSize() {
    const size = document.getElementById('size').value
    if (isNaN(size) || size < 4 || size > 128) {
        menssage('Tamanho inválido, digite um valor entre 4 e 128!', '#dc2626')
    }

    return size;
}

function generatorPassword(size, tiposChar) {
    let passwordGenerator = ''

    while (passwordGenerator.length < size) {
        passwordGenerator += tipoStingAleatorio(tiposChar)
    }

    return passwordGenerator;
}

function tipoStingAleatorio(tiposChar) {
    const randomIndex = Math.floor(Math.random() * tiposChar.length)
   
    
    return tiposChar[randomIndex][Math.floor(Math.random() * tiposChar[randomIndex].length)];
}

function menssage(text, background ) {
    Toastify({
        text: text,
        duretion: 3000,
        style: {
            background: background,
            boxShadow: 'none'
        }
    }).showToast()
}

document.getElementById('generator').addEventListener('click', function () {
    const size = getPassowordSize()
    const tiposChar = pegarTipoString()

    
    if (!size) {
        return;
    }
    if (!tiposChar.length) {
        menssage('Selecione pelo menos um tipo de caracter', '#dc2626')
    }
    
    const passwordGenerator = generatorPassword(size, tiposChar)
    
    document.querySelector('#password_container').classList.add('show')
    document.getElementById('password').textContent= passwordGenerator;
})

document.getElementById('copy').addEventListener('click', function () {
    navigator.clipboard.writeText(document.getElementById('password').textContent)
    menssage('Senha Copiada com Sucesso!', '#84cc16')
})