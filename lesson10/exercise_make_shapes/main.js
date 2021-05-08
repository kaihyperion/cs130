const circle = '<circle cx="416" cy="494" r="20" stroke="black" stroke-width="3" fill="red"></circle>';
//const square = '<rect x="291" y="70" width="40" height="40" stroke="black" stroke-width="3" fill="pink"></rect>'
const triangle = ' <polygon points="100,100 150,100 125,135" stroke="black" stroke-width="3" fill="teal"></polygon>';

//document.querySelector('svg').insertAdjacentHTML("beforeend", square);
//document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);

const drawCircle = (ev) =>{
    const x = ev.offsetX;
    const y = ev.offsetY;
    const color = document.querySelector('#color').value;
    const size = document.querySelector('#size').value;
    const circle = `
        <circle cx="${x}" cy="${y}" r="${size}" stroke="black" stroke-width="3" fill="${color}"> </circle>`;
    document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
}

const drawTriangle = (ev) =>{
    const x = ev.offsetX;
    const y = ev.offsetY;
    const color = document.querySelector('#color').value;
    const size = document.querySelector('#size').value;
    const triangle = `
        <polygon points="100, 100 150, 100 125, 135" stroke="black" stroke-width="3" fill="${color}"> </polygon>`;
    document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);
}

document.querySelector('svg').onclick = drawCircle;
document.querySelector('svg').onclick = drawTriangle;