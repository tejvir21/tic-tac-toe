let  boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let game = document.querySelector(".game-component");

let count = 0;
let turn0 = true;
let isTurn = false;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if(turn0 === true) {
            box.style.color = "red";
           box.innerText = 'O'
           turn0 = false 
        }
        else {
            box.style.color = "skyblue";
            box.innerText = 'X'
            turn0 = true
        }
        box.disabled = true

        checkWinner();
    })
})


resetBtn.addEventListener('click', () => {
    game.classList.remove('hide')

    boxes.forEach((box) => {
        box.innerText = ''
        box.disabled = false
    })

    count=0
    isTurn = false

    msgContainer.classList.add('hide')
})

newBtn.addEventListener('click', () => {
    game.classList.remove('hide')

    boxes.forEach((box) => {
        box.innerText = ''
        box.disabled = false
    })

    msgContainer.classList.add('hide')
    isTurn = false

    count = 0;
})

const showWinner = (winner) => {
    game.classList.add('hide')
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide')
    boxes.forEach((box) => {
        box.disabled = true
    })
}

const checkWinner = () => {

    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if(pos1val !="" && pos2val !="" && pos3val !="") {
            if(pos1val === pos2val && pos2val === pos3val) {
                isTurn = true
                showWinner(pos1val);
            }
        }
    }

    count++;

    if(count===9 && !isTurn) {
    game.classList.add('hide')

        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove('hide')
        boxes.forEach((box) => {
            box.disabled = true
        })  
    }
}

