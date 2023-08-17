let board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
let player = "x"
let win = 0
//Casillas
const casilla0_0 = document.getElementById("primera")
const casilla0_1 = document.getElementById("segunda")
const casilla0_2 = document.getElementById("tercera")
const casilla1_0 = document.getElementById("cuarta")
const casilla1_1 = document.getElementById("quinta")
const casilla1_2 = document.getElementById("sexta")
const casilla2_0 = document.getElementById("septima")
const casilla2_1 = document.getElementById("octava")
const casilla2_2 = document.getElementById("novena")

const show = () => {
    console.log(board)
}
const play = (x, y, casilla) => {
    if(check(x,y)){
        board[x][y] = player
        updateTable(casilla, player)
        player = player === "x" ? "o" : "x"
    }
}
const check = (x,y) => {
    if(board[x][y] !== '-'){
        console.log("La casilla ya esta marcada")
        return false
    }
    return true
}
const winner = () => {
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== '-'){
        console.log(`The winner is ${board[0][0]}`)
        win = 1
    } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] !== '-') {
        console.log(`The winner is ${board[1][0]}`)
        win = 1
    } else if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] !== '-') {
        console.log(`The winner is ${board[2][0]}`)
        win = 1
    } else if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] !== '-') {
        console.log(`The winner is ${board[0][0]}`)
        win = 1
    } else if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] !== '-') {
        console.log(`The winner is ${board[0][1]}`)
        win = 1
    } else if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] !== '-') {
        console.log(`The winner is ${board[0][2]}`)
        win = 1
    } else if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '-') {
        console.log(`The winner is ${board[0][0]}`)
        win = 1
    } else if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== '-') {
        console.log(`The winner is ${board[0][2]}`)
        win = 1
    }
}
const updateTable = (elem, player) => {
    if(player === "x"){
        elem.style.background = "red";//url("img/Red_X.svg.png")
    }else {
        elem.style.background = "black";//url("img/o.png")
    }
}

const juego = () => {
    document.getElementById("start").hidden = true
    while(win != 1){
        casilla0_0.addEventListener('click', function(){play(0, 0, casilla0_0);}, true)
        casilla0_1.addEventListener('click', function(){play(0, 1, casilla0_1);}, true)
        casilla1_0.addEventListener('click', function(){play(1, 0, casilla1_0);}, true)
        casilla1_1.addEventListener('click', function(){play(1, 1, casilla1_1);}, true)
        casilla1_2.addEventListener('click', function(){play(1, 2, casilla1_2);}, true)
        casilla2_0.addEventListener('click', function(){play(2, 0, casilla2_0);}, true)
        casilla2_1.addEventListener('click', function(){play(2, 1, casilla2_1);}, true)
        casilla2_2.addEventListener('click', function(){play(2, 2, casilla2_2);}, true)
        winner()
    }
}
