
let previousOperandText = document.querySelector("output")
let currentOperandText = document.querySelector("h3")
let numberButtons = document.querySelectorAll(".num")
let clearButton = document.querySelector(".ac")
let delButton = document.querySelector(".del")
let operationButtons = document.querySelectorAll(".operation")
let equalButton = document.querySelector(".equal")

class Calculator {
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.allClear()
    }
    allClear (){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }
    delete (){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    compute (){
        let computation
        const prev = Number(this.previousOperand)
        const current = Number(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+":
                computation = prev + current
                break;
            case "-":
                    computation = prev - current
                    break;
            case "x":
                    computation = prev * current
                    break;
            case "÷":
                    computation = prev / current
                    break;
            default:
                return
            
        }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ""
    }
    appendNumber(number){
        if (number === "." && this.currentOperand.includes(".")) {return}
        else if (this.currentOperand === "."){return this.currentOperand = "0." + number.toString();}
        else if(this.currentOperand === "0" && number === ".") {return this.currentOperand = "0.";}
        else if(this.currentOperand === "0") {return this.currentOperand = "0." + number.toString();}
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand === "") return
        if(this.currentOperand !== "") {this.compute()}
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }
    
    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand
        if(this.operation != null){
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`
        } else {this.previousOperandText.innerText = ""}
       
    }
}

const calculator = new Calculator (previousOperandText, currentOperandText)

numberButtons.forEach( button => {button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
})})

operationButtons.forEach( button => {button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
})})

clearButton.addEventListener("click", button => {
    calculator.allClear()
    calculator.updateDisplay()
})

equalButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})
delButton.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
})