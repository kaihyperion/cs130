const add_numbers = (ev) => {
    // Your code here...
    console.log('add the numbers...');
    
    let x = document.querySelector("#num1").value;
    let y = document.querySelector("#num2").value;
    let sum = Number(x) + Number(y);
    document.querySelector('#answer').innerHTML = sum;
    alert(sum);

    
}

const subtract_numbers = (ev) => {
    let x = document.querySelector("#num1").value;
    let y = document.querySelector("#num2").value;
    let result = Number(x) - Number(y);
    document.querySelector('#answer').innerHTML = result;
    alert(result);
}

const multiply_numbers = (ev) => {
    console.log('multiply the numberes...')
    let x = document.querySelector("#num1").value;
    let y = document.querySelector("#num2").value;
    let sum = Number(x) * Number(y);
    document.querySelector('#answer').innerHTML = sum;
    alert(sum);
}

const divide_numbers = (ev) => {
    console.log('divide the numberes...')
    let x = document.querySelector("#num1").value;
    let y = document.querySelector("#num2").value;
    let sum = Number(x) / Number(y);
    document.querySelector('#answer').innerHTML = sum;
    alert(sum);
}

document.getElementById('add').onclick = add_numbers;
document.getElementById('subtract').onclick = subtract_numbers;
document.getElementById('multiply').onclick = multiply_numbers;
document.getElementById('divide').onclick = divide_numbers;