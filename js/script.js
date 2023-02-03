let main = document.querySelector('.buttons_main');
let output = document.querySelector('.output');

main.onclick = function(event){
    event.target.value == '1' ? output.innerHTML += '1': 
    event.target.value == '2' ? output.innerHTML += '2':
    event.target.value == '3' ? output.innerHTML += '3':
    event.target.value == '4' ? output.innerHTML += '4':
    event.target.value == '5' ? output.innerHTML += '5':
    event.target.value == '6' ? output.innerHTML += '6':
    event.target.value == '7' ? output.innerHTML += '7':
    event.target.value == '8' ? output.innerHTML += '8':
    event.target.value == '9' ? output.innerHTML += '9':
    event.target.value == '0' ? output.innerHTML += '0':
    event.target.value == '.' ? output.innerHTML += '.':
    event.target.value == '+' ? output.innerHTML += '+':
    event.target.value == '-' ? output.innerHTML += '-':
    event.target.value == '*' ? output.innerHTML += '*':
    event.target.value == '/' ? output.innerHTML += '/':
    event.target.value == 'C' ? output.innerHTML = '':
    undefined
}