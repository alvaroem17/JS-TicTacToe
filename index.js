let board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
let player = "x"
let win = 0
//Casillas


const show = () => {
    console.log(board)
}
const play = (x, y) => {
    if(check(x,y)){
        board[x][y] = player
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
const juego = () => {
    while(win != 1){
        show()
        let posx = prompt(`Introduce la primera posición jugador ${player}: `)
        let posy = prompt(`Introduce la segunda posición jugador ${player}: `)
        play(parseInt(posx, 10), parseInt(posy, 10))
        winner()
    }
}
juego()