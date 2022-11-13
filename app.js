const h1 = document.querySelector('h1');
const button = document.querySelector('button');



const makeRandomColor = function() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    // &IN DARK COLOR CHANGES THE FONT TO WHITE FOR VISIBILITY

    if (r <= 90 && b <= 80 && g <= 90) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black'
    }
    return `rgb(${r},${g},${b})`;
}




// & MAIN LOGIC

button.addEventListener('click', function() {
    const randomColor = makeRandomColor()
    document.body.style.backgroundColor = randomColor
    h1.innerHTML = randomColor
})





//& ADDING ENTER  KEY TO CHANGE CHANGE THE COLOR

window.addEventListener('keydown', function(e) {

    const randomColor = makeRandomColor()

    switch (e.code) {
        case 'Enter':
            document.body.style.backgroundColor = randomColor;
            h1.innerHTML = randomColor
            break;

        case 'NumpadEnter':
            document.body.style.backgroundColor = randomColor;
            h1.innerHTML = randomColor
            break;

        default:
            this.document.body.style.backgroundColor = 'none';

    }
    console.log(e.key); //USED TO IDENTIFY THE KEY           EXAMPLE (Q)
    console.log(e.code); //USED TO IDENTIFY THE KEY CODE     EXAMPLE (KeyQ)
})




// ! STYLES
h1.style.textTransform = 'uppercase';
h1.style.textAlign = 'center';
button.style.width = '200px'
button.style.padding = '10px'
button.style.boxShadow = '3px 4px black'
button.style.margin = 'auto'
button.style.border = '2px solid black'
button.style.fontSize = '1.5rem'
button.style.textTransform = 'uppercase';
