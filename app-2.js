const board = document.querySelector('#board');
const startButton = document.querySelector('#start')
const resetButton = document.querySelector('#reset')
const input = document.querySelector('#num');

startButton.addEventListener('click', start)
resetButton.addEventListener('click', reset)

function start() {
    const squaresAmount = input.value

    for (let i = 0; i < squaresAmount; i++) {
        const square = document.createElement('div');  // create element
        square.classList.add('square');   // add style sheet
        board.append(square);    // add to DOM

        square.addEventListener('mouseover', () => {   // event listener om mouse over
            // console.log('mouse over');
            setColor(square);
        })
        square.addEventListener('mouseleave', () =>   // event listener om mouse leave
            removeColor(square)
        )
    }
}

function reset() {
    input.value = '400'
    board.innerHTML = ''
}


function setColor(elem) {     // to change color of element
    const color = Math.floor(Math.random()*16777215).toString(16);  // get random color on base 16
    elem.style.backgroundColor = `#${color}`;
    elem.style.boxShadow = `0 0 2px #${color}, 0 0 10px #${color}`;    //  adjust square shadow on mouse over

}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'   // set color by default
    elem.style.boxShadow = `0 0 2px #000`;    //  set square shadow to default (as in style.css) on mouse leave
    // elem.style.backgroundColor = 'transparent';
    // elem.style.boxShadow = '';
}

