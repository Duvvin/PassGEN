// Selecionando Botões
const btnGen = document.querySelector(".btnGen")
const btnClip = document.querySelector(".btnClip")

// Selecionando CheckBox
const num = document.querySelector("#num");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const symbols = document.querySelector("#symbols");
const passOut = document.querySelector("#passOut")

function getCheckBox(num, uppercase, lowercase, symbols) {
    let number = "1234567890".split('')
    let upper = ''
    let lower = ''
    let symb = ''
    if(uppercase.checked) {
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    }
    if(lowercase.checked) {
        lower = "abcdefghijklmnopqrstuvwxyz".split('')
    }
    if(symbols.checked) {
        symb = "?,._-+=*&%$#@!".split('')
    }
    let passArray = [number, upper, lower, symb]
    return passArray.flat()
}

function newPass() {
    const length = document.querySelector('#length');
    const chars = getCheckBox(num, uppercase, lowercase, symbols)
    let password = ''

    for(let i = 0; i < Number(length.value); i++) {
        const randIndex = Math.floor(Math.random() * chars.length)
        password += chars[randIndex]
    }
    return password
}

// Selecionando caixa de alerta
const alert = document.querySelector('#alert')

btnGen.addEventListener('click', (e) => {
    e.preventDefault();
    const pass = newPass()
    passOut.innerHTML = pass
    if(alert.innerHTML) alert.innerHTML = ''
})

btnClip.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        if(!passOut.value) throw new Error()
        navigator.clipboard.writeText(passOut.value)
        alert.classList = 'success'
        alert.innerHTML = 'Senha Copiada!'
        
    } catch(err) {
        alert.classList = 'error'
        alert.innerHTML = 'Falha ao copiar senha.'
    }
})