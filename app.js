const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'] // array of default colors, length is 5
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');  // create element
    square.classList.add('square');   // add style sheet

    square.addEventListener('mouseover', setColor)   // event listener om mouse over - general way 

    square.addEventListener('mouseleave', () => {  // event listener om mouse leave - using function callback 
        // console.log('mouse leave');
        removeColor(square)
    })
    board.append(square);    // add to DOM
}

// to change color of element
function setColor(ev) {     //  event got from Event Listener
    // console.log(ev);   //  MouseEvent object
    const elem = ev.target;   //  get element from MouseEvent
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;    //  adjust square shadow on mouse over
}

// to delete(reset) color of element
function removeColor(elem) {  //  element got from Event Listener
    // console.log(elem);    //    div element with class 'square'
    elem.style.backgroundColor = '#1d1d1d'   // set color by default
    elem.style.boxShadow = `0 0 2px #000`;    //  set square shadow to default (as in style.css) on mouse leave
}

function getRandomColor() {
   return colors[ Math.floor(Math.random() * colors.length)];  // length of array is 5, Math.floor() rounds down
}