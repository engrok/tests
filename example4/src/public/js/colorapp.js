/*
    The code below was taken from:
    https://github.com/JS-Beginners/color-changing-app/blob/main/app.js
*/

let colors = ['red', 'blue', 'green', 'orange',
    'purple', 'black', 'yellow', 'pink',
    'cyan', 'brown', 'gray', 'gold', 'teal',
    'indigo', 'khaki', 'lime', 'aqua', 'navy',
    'sienna', 'crimson', 'fuchsia', 'violet'];

let button = document.getElementById('button');

button.addEventListener('click', function () {
    let index = parseInt((Math.random() * colors.length) + 1);
    let canvas = document.getElementById('canvas');
    canvas.style.background = `${colors[index]}`
})