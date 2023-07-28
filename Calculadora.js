let suma = document.getElementById('suma')
suma.addEventListener('click', sumar)

function sumar() {
    let number = prompt('primer número')
    console.log(number)
    let number2 = prompt('Dame el segundo número')
    let n1 = number
    console.log(typeof n1)
    let n2 = number2
    console.log(n1)
    console.log(typeof n2)
    let s = n1+ n2
    console.log(typeof s)
    console.log(s,number,number2)
    let resultado = document.getElementById('resultados')
    let parrafo = document.createElement("p")
    parrafo.innerHTML='la suma de ', number, ' + ', number2, ' es',s
    resultado.appendChild(parrafo)
}