
let previousOperandText = document.querySelector("output")
let currentOperandText = document.querySelector("h3")
let numberButtons = document.querySelectorAll(".num")
let clearButton = document.querySelector(".ac")
let delButton = document.querySelector(".del")
let operationButton = document.querySelectorAll(".operation")
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

    }
    equal (){

    }
    appendNumber(number){
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){

    }
    
    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand
    }
}

const calculator = new Calculator (previousOperandText, currentOperandText)

numberButtons.forEach( button => {button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
})})