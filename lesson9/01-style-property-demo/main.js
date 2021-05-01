
const makeRed = (ev) => {
    // your code here...
    console.log('turn background red.');
    document.querySelector('body').style.backgroundColor = 'red';
    
};

const makeBlue = (ev) => {
    // your code here...
    console.log('turn background blue.');
    document.querySelector('body').style.backgroundColor = 'blue';
};

const makePink = (ev) => {
    // your code here...
    console.log('turn background pink.');
    document.querySelector('body').style.backgroundColor = 'yellow';
    
};

const makeOrange = (ev) => {
    // your code here...
    console.log('turn background orange.')
    document.querySelector('body').style.backgroundColor = 'orange';
    
};


document.querySelector('#btn1').onclick = makeRed;
document.querySelector('#btn2').onclick = makeBlue;
document.querySelector('#btn3').onclick = makePink;
document.querySelector('#btn4').onclick = makeOrange;