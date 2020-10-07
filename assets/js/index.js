//Desarrollo del juego Cachipun
function cachipun(n1, n2) {
    if (n1 == "piedra" && n2 == "tijera") {
        console.log('Has Ganado')
        alert("Has Ganado")
    } else if (n1 == "papel" && n2 == "piedra") {
        console.log('Has Ganado')
        alert("Has Ganado")
    } else if (n1 == "tijera" && n2 && "papel") {
        console.log('Has Ganado')
        alert("Has Ganado")
    } else if (n1 == "piedra" && n2 == "papel") {
        console.log('Perdiste')
        alert("Has Perdido")
    } else if (n1 == "papel" && n2 == "tijera") {
        console.log('Perdiste')
        alert("Has Perdido")
    } else if (n1 == "tijera" && n2 == "piedra") {
        console.log('Perdiste')
        alert("Has Perdido")
    } else if (n1 == n2) {
        console.log('Empataste')
        alert("Has Empatado")
    }
}

//Funcion asignar variables a seleccion de usuario
function usuario(a) {
    if (a == 0) {
        a = "piedra"
    } else if (a == 1) {
        a = "papel"
    } else if (a == 2) {
        a = "tijera"
    } else {
        prompt('Opcion no valida')
    }
    console.log('Yo elegí: ', a)
    return a
}

//Funcion asignar variables a máquina
function maquina(b) {
    if (b == 0) {
        b = "piedra"
    } else if (b == 1) {
        b = "papel"
    } else if (b == 2) {
        b = "tijera"
    }
    console.log('Máquina eligió: ', b)
    return b
}

//Declarando módulo para veces que va a jugar Cachipun
function asigna() {
    let jugada = +prompt('Seleccione su jugada: \nPara piedra = 0, \nPara papel = 1, \nPara Tijera = 2')
    let aleatorio = Math.floor((Math.random() * (2 - 0)) + 0)
    let user = usuario(jugada)
    let machine = maquina(aleatorio)
    cachipun(user, machine)
}

//Función seleccionar cantidad de veces a jugar
function cantidad() {
    let juegos = +prompt('Seleccione cantidad de veces a jugar: ')
    return juegos
}

//Función Repetir juego
function iterar() {
    let tope = cantidad()
    for (let i = 0; i < tope; i++) {
        console.log('jugada numero', i+1)
        asigna()

    }
}