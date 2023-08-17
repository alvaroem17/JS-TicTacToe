let board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
let player = "x"
let count = 0
//Casillas
const casillas = document.querySelectorAll(".table section")

const show = () => {
    console.log(board)
}
const clear = () => {
    board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
    count = 0
    casillas.forEach(casilla => {
        casilla.style.background = "aliceblue";
    })
}
const play = (x, y, casilla) => {
    if(check(x,y)){
        board[x][y] = player
        count++
        winner()
        if(count === 9){
        }
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
        elem.style.background = "red"//"img/Red_X.svg.png";
    }else {
        elem.style.background = "black"//"img/o.png";
    }
}

casillas.forEach(casilla => {
    casilla.addEventListener('click', () => {
        let x 
        let y
        console.log(casilla.id)
        updateTable(casilla, player)
        switch(casilla.id) {
            case 'primera':
                x = 0
                y = 0
                break;
            case 'segunda':
                x = 0
                y = 1
                break;
            case 'tercera':
                x = 0
                y = 2
                break;
            case 'cuarta':
                x = 1
                y = 0
                break;
            case 'quinta':
                x = 1
                y = 1
                break;
            case 'sexta':
                x = 1
                y = 2
                break;
            case 'septima':
                x = 2
                y = 0
                break;
            case 'octava':
                x = 2
                y = 1
                break;
            case 'novena':
                x = 2
                y = 2
                break;
        }
        play(x, y, casilla.id);
    });
});

document.getElementById("start").addEventListener('click', () => {
    document.getElementById("start").hidden = true;
    document.getElementById("clear").hidden = false;
});
document.getElementById("clear").addEventListener('click', () => { clear(); });