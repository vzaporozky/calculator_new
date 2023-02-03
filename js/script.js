let main = document.querySelector('.buttons_main');
let output = document.querySelector('.output');
let equel = document.querySelector('.equel');

main.onclick = function(event){
    if(event.target.value == '1' || event.target.value == '2' || event.target.value == '3'|| event.target.value == '4'|| event.target.value == '5'
    || event.target.value == '6'|| event.target.value == '7'|| event.target.value == '8'|| event.target.value == '9' || event.target.value == '0'){
        output.innerHTML += event.target.value;
    }

    if(event.target.value == '.'){
        if(output.innerHTML.indexOf('.') < 0){
            output.innerHTML += '.';
        }
    }

    if(event.target.value == 'C'){
        output.innerHTML = '';
    }

    let outputString = output.innerHTML;
    let lastChar = outputString[outputString.length - 1];
    

    if(event.target.value == '+' || event.target.value == '-' || event.target.value == 'x' || event.target.value == '÷'){
        if(lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷'){
            let newString = outputString.substring(0, outputString.length - 1) + event.target.value;
            output.innerHTML = newString;
        }else{
            output.innerHTML += event.target.value; 
        }
        
    }

    if(event.target.value == '='){
        let inputString = output.innerHTML;
        let numbers = inputString.split(/\+|\-|\x|\÷/g);
        let operators = inputString.replace(/[0-9]|\./g, "").split("");

        function calc(op, el){
            while (op != -1) {
                el == '+' ? numbers.splice(op, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]))
                : el == '-' ? numbers.splice(op, 2, numbers[op] - numbers[op + 1])
                : el == '÷' ? numbers.splice(op, 2, numbers[op] / numbers[op + 1])
                : el == '*' ? numbers.splice(op, 2, numbers[op] * numbers[op + 1])
                :undefined;

                operators.splice(op, 1);
                op = operators.indexOf(el);
            }
        }
      
        let divide = operators.indexOf("÷");
        let multiply = operators.indexOf("x");
        let subtract = operators.indexOf("-");
        let add = operators.indexOf("+");

        calc(divide, '÷')
        calc(multiply, '*')
        calc(subtract, '-')
        calc(add, '+')

        output.innerHTML = numbers[0]; 
    }
}