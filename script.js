// let currentPlayer = "X";
// let array = Array(9).fill(null);
// // console.log(array);
// function checker(){
//     if(
//         (array [0]!= null && array[0] == array[1] && array[1] == array[2]) ||
//         (array [3]!= null && array[3] == array[4] && array[4] == array[5]) ||
//         (array [6]!= null && array[6] == array[7] && array[7] == array[8]) ||
//         (array [0]!= null && array[0] == array[3] && array[3] == array[6]) ||
//         (array [1]!= null && array[1] == array[4] && array[4] == array[7]) ||
//         (array [2]!= null && array[2] == array[5] && array[5] == array[8]) ||
//         (array [0]!= null && array[0] == array[4] && array[4] == array[8]) ||
//         (array [2]!= null && array[2] == array[4] && array[4] == array[6])
//     ){
//         // console.log(currentPlayer);
//         document.write(`Chicken Dinner !!! ${currentPlayer}`);
//         return ;
//     }
//     if(!array.some(e => e === null)){
//         document.write(`Draw !!`);
//         return ;
//     }
// }
// function handleClick(e){
//     // console.log(e);
//     const id =Number(e.id);
//     if(array[id] == null){
//         array[id] = currentPlayer;
//         e.innerText = currentPlayer;
//         checker();
//         currentPlayer = currentPlayer == "X" ? "0" : "X";
//     }
    

//     // console.log(array)
// }



let currentPlayer = "X";
let array = Array(9).fill(null);

function checker() {
    if (
        (array[0] != null && array[0] === array[1] && array[1] === array[2]) ||
        (array[3] != null && array[3] === array[4] && array[4] === array[5]) ||
        (array[6] != null && array[6] === array[7] && array[7] === array[8]) ||
        (array[0] != null && array[0] === array[3] && array[3] === array[6]) ||
        (array[1] != null && array[1] === array[4] && array[4] === array[7]) ||
        (array[2] != null && array[2] === array[5] && array[5] === array[8]) ||
        (array[0] != null && array[0] === array[4] && array[4] === array[8]) ||
        (array[2] != null && array[2] === array[4] && array[4] === array[6])
    ) {
        setTimeout(() => {
            alert(`Chicken Dinner!!! Player ${currentPlayer} wins!`);
            resetGame();
        }, 100);
        return;
    }
    if (!array.some(e => e === null)) {
        setTimeout(() => {
            alert(`Draw!`);
            resetGame();
        }, 100);
    }
}

function handleClick(e) {
    const id = Number(e.id);
    if (array[id] == null) {
        array[id] = currentPlayer;
        e.innerText = currentPlayer;
        e.classList.add(currentPlayer);
        checker();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function resetGame() {
    array.fill(null);
    const cols = document.querySelectorAll('.col');
    cols.forEach(col => {
        col.innerText = '';
        col.classList.remove('X', 'O');
    });
    currentPlayer = "X";
}
