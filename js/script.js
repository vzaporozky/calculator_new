let main = document.querySelector('.buttons_main');
let output = document.querySelector('.output');
let equel = document.querySelector('.equel');

main.onclick = function(event){
    if(event.target.value == '1' || event.target.value == '2' || event.target.value == '3'|| event.target.value == '4'|| event.target.value == '5'
    || event.target.value == '6'|| event.target.value == '7'|| event.target.value == '8'|| event.target.value == '9' || event.target.value == '0'){
        output.innerHTML += event.target.value;
    }

    if(event.target.value == '.'){
        if(output.innerHTML == ''){
            output.innerHTML += '0.';
        }else if(output.innerHTML.indexOf('.') < 0){
            output.innerHTML += '.';
        }
    }

    if(event.target.value == 'C'){
        output.innerHTML = '';
    }

    let outputString = output.innerHTML;
    let lastChar = outputString[outputString.length - 1];
    

    if(event.target.value == '+' || event.target.value == '-' || event.target.value == 'x' || event.target.value == '/'){
        if(lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/'){
            let newString = outputString.substring(0, outputString.length - 1) + event.target.value;
            output.innerHTML = newString;
        }else{
            output.innerHTML += event.target.value; 
        }
        
    }
}
result.addEventListener("click", function() {

    var inputString = input.innerHTML;
  
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
  
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
  
    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");
  
    var divide = operators.indexOf("÷");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }
  
    var multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }
    var subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  
    var add = operators.indexOf("+");
    while (add != -1) {
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }
  
    input.innerHTML = numbers[0]; 
  
    resultDisplayed = true; 
  });