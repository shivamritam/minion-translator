const output = document.querySelector('#output');

const input = document.querySelector('#input');

const button = document.querySelector('button');

button.addEventListener('click',clickHandler)

function clickHandler(){
let url = `https://api.funtranslations.com/translate/minion.json?text=${encodeURI(input.value)}`;

fetch(url)
.then(response => response.json())
.then(json => {
output.innerText = json.contents.translated;
})
.catch(() => alert("something went wrong!"))



}