const defaultTheme = () => {
   alert('switch to default theme');
   document.querySelector('header').style.background = 'black';
   document.querySelector('header').style.fontFamily = 'Covered By Your Grace, cursive';
   document.querySelector('header').style.fontSize = '1.8em';
   document.querySelector('.content').style.background = 'white'
};

const oceanTheme = () => {
   alert('switch to ocean theme');
   document.querySelector('header').style.background = '#434a6c';
   document.querySelector('header').style.fontFamily = 'Amatic SC, cursive';
   document.querySelector('header').style.fontSize = '1.8em';
   document.querySelector('.content').style.background = '#99cccc';
};

const desertTheme = () => {
   alert('switch to desert theme');
   document.querySelector('header').style.background = '#A8651E';
   document.querySelector('header').style.fontFamily = 'Dokdo', 'cursive';

   document.querySelector('.content').style.background = '#EFDEC2';
};


document.querySelector('#default').onclick = defaultTheme;
document.querySelector('#ocean').onclick = oceanTheme;
document.querySelector('#desert').onclick = desertTheme;

