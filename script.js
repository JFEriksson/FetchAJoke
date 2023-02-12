
const joke = document.querySelector('.dadJoke');
const button = document.querySelector('.dadJoke')
const randomColor = document.querySelector('.container')
const bodyCol = document.querySelector('.body')


function createJoke() {
fetch('https://icanhazdadjoke.com/', {headers: { 'Accept': 'application/json' }})
.then(rawResponse => rawResponse.json())
.then(jsonData => joke.innerHTML = jsonData.joke)
}
createJoke()

function changeColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    randomColor.style.backgroundColor = bgColor;

    function bodyColor(){
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor2);
        bodyCol.style.backgroundColor = bgColor2;
    }
    bodyColor()
}

button.addEventListener('click', function () {
    createJoke();
    changeColor();
})   

function update(interval) {
setInterval(() => {
    createJoke()
    changeColor()  
}, interval * 7000)
}
update(1)