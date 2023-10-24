
// Genera un numero aleatorio de de 4 digitos
let random_number = Math.floor(1000 + (Math.random() * 9999 - 1000))

// Eventos de DOM

// Boton de ingreso de numero
document.getElementById("btn-input",).addEventListener("click", ()=> {
    let user_number = document.getElementById("user_number").value
    validate(user_number)
})

// Boton de mostrar numero aleatorio ( respuesta )
document.getElementById("btn-show",).addEventListener("click", ()=> {
    showRandom()
})


// Logica

// Mostrar numero Aleatorio
let showRandom = () => {
    alert(random_number)
}

// Validar Picas
let validate = (user_number) => {

    let counter = 0

    cleanPicks()

    // Recorrer cada digito del numero introducido por el usuario
    for (let index = 0; index < user_number.length; index++) {
        
        const userDigit = user_number.charAt(index)
        const randomDigit = ("" + random_number).charAt(index)
        
        if(userDigit == randomDigit) {
            showPicks(userDigit)
            counter++
        }

    }

    // En caso de tener todas las picas Reiniciamos la pagina para que el juego inicie de nuevo
    if(counter == 4) {

        // Mostramos mensaje de juego finalizado
        alert("Felicidades Tienes todas las picas")

        // Reiniciamos la pagina 
        window.location = "/"
    }
}

// Mostrar DOM Picas
let showPicks = (pick) => {
    document.getElementById("picks").innerHTML += "<li>" + pick + "</li>"
}

// Limpiar DOM de picas
let cleanPicks = () => {
    document.getElementById("picks").innerHTML = ""
}