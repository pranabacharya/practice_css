class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOpperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        // 
        if(number === '.' && this.currentOperand.includes('.')){
            return ;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.currentOperand == '') {
            return ;
        }
        if(this.previousOpperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOpperand = this.currentOperand ;
        this.currentOperand = '' ;
    }

    compute() {
        let computation ;
        const prvs = parseFloat(this.previousOpperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prvs) || isNaN(current)) {
            return ;
        }
        switch (this.operation){
            case '+':
                computation = prvs + current ;
                break;
            case '-':
                computation = prvs - current ;
                break;
            case '*':
                computation = prvs * current ;
                break;
            case '÷':
                computation = prvs / current ;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined ;
        this.previousOpperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand ;
        if(this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOpperand} ${this.operation} ${this.currentOperand}` ;
        }else {
            this.previousOperandTextElement.innerText = '';
        }
        
    }

}


const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberBtns.forEach( button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
})

operationBtns.forEach( button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
})

equalBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearBtn.addEventListener('click',() => {
    calculator.clear();
    calculator.updateDisplay();

})

deleteBtn.addEventListener('click', () =>{
    calculator.delete();
    calculator.updateDisplay();
})

document.addEventListener('keypress',(e) => {
    if(e.key == "Enter"){
        e.preventDefault();
    }
})