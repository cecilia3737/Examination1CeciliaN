/* Random Väder App - Egen kod*/

const sunny = {
    text: 'Soligt',
    icon: 'ic1'
}
const cloudy = {
    text: 'Molnigt',
    icon: 'ic2'
}
const rainy = {
    text: 'Regn',
    icon: 'ic3'
}
const Thunder = {
    text: 'Åska',
    icon: 'ic4'
}

const weather = [
    sunny,
    cloudy,
    rainy,
    Thunder
]

function getRandomWeather(){
    const randomNr = randomNumber()
    return weather[randomNr]
}

function randomNumber(){
    return Math.floor(Math.random()* weather.length)
}

const randomWeater = getRandomWeather()

const weathertext = document.querySelector('.weather-text').
innerHTML = randomWeater.text

document.getElementById(randomWeater.icon).style.display = "unset";

console.log(randomWeater)

/* Miniräknare - Följde en tutorial för att förstå lite basics*/

const calculator = {
    displayValue: '0',
    firstNumber: null,
    checkOperand: false,
    operator: null,
}

function inputNumber(number) {
    const { displayValue, checkOperand } = calculator;

    if (checkOperand === true) {
        calculator.displayValue = number;
        calculator.checkOperand = false;
    }
    else {
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
    console.log(calculator)
}

function inputDecimal(dot) {

    if (calculator.checkOperand === true) {
        calculator.displayValue = '0.'
        calculator.checkOperand = false;
        return
    }
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator){
    const { firstNumber, displayValue, operator } = calculator

    const inputValue = parseFloat(displayValue);

    if (operator && calculator.checkOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if (firstNumber == null && !isNaN(inputValue)) {
        calculator.firstNumber = inputValue;    
    }
    else if (operator){
        const result = calculate(firstNumber, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstNumber = result;
    }

    calculator.checkOperand = true;
    calculator.operator = nextOperator;

    console.log(calculator)
}

function calculate(firstNumber, secondNumber, operator){
    if (operator === '+'){
        return firstNumber + secondNumber;
    }
    else if (operator === '-'){
        return firstNumber - secondNumber;
    }
    else if (operator === '*'){
        return firstNumber * secondNumber;
    }
    else if (operator === '/'){
        return firstNumber / secondNumber;
    }

    return SecondNumber;
}

function clearCalculator(){
    calculator.displayValue = '0';
    calculator.firstNumber = null;
    calculator.checkOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

function updateDisplay(){
    const display = document.querySelector('.calc-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const buttons = document.querySelector('.calc-buttons')
buttons.addEventListener('click', (event) => {
    const {target} = event;
    const {value} = target;

if (!target.matches('button')){
    return;
}

switch (value) {
    case '+':
    case '-':
    case '/':
    case '*':
    case '=':
        handleOperator(value);
        break;
    case '.':
        inputDecimal(value);
        break;
    case 'all-clear':
        clearCalculator();
        break;
    default:
        if (Number.isInteger(parseFloat(value))) {
            inputNumber(value);
        }
}

updateDisplay();

});