let board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
let player = "x"
let win = 0
//Casillas
const casillas = document.querySelectorAll(".table section")

const show = () => {
    console.log(board)
}
const play = (x, y, casilla) => {
    if(check(x,y)){
        board[x][y] = player
        winner()
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
});

if(win === 1){
    document.getElementById("start").hidden = true;
    casillas.forEach(casilla => {
        casilla.style.background = "aliceblue";
    })
}
/*
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
}*/
