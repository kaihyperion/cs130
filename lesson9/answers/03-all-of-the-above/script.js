const changeColor = () => {
    let color = prompt('What color?: ');
    document.getElementById("panel1").style.backgroundColor = color;
};

const changeTitle = () => {
    let title = prompt('New title: ');
    document.querySelector("h1").innerText = title;
}

const addImage = () => {
    const image_html = `<img src="https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg" />`;
    document.getElementById("panel1").innerHTML += image_html;
};

const clearDivs = () => {
    document.getElementById("panel1").innerHTML = "";
};


// attach event handlers:
document.getElementById("color_button").onclick = changeColor;
document.getElementById("title_button").onclick = changeTitle;
document.getElementById("wombat_button").onclick = addImage;
document.getElementById("clear_button").onclick = clearDivs;
