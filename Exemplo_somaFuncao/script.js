const soma = () => {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let soma = num1 + num2
    document.getElementById("resultado").innerText = "O resultado é: " + soma
}

const subtrai = () => {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let subtracao = num1 - num2
    document.getElementById("resultado").innerText = "O resultado é: " + subtracao
}

const multiplica = () => {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let multiplicacao = num1 * num2
    document.getElementById("resultado").innerText = "O resultado é: " + multiplicacao
}

const divide = () => {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let divisao = num1 / num2
    document.getElementById("resultado").innerText = "O resultado é: " + divisao
}