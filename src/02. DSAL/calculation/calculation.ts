import { Stack } from "../Stack/stack.array.class"

const add = (a: number, b: number): number => a + b
const subtract = (a: number, b: number): number => a - b
const multiply = (a: number, b: number): number => a * b
const divide = (a: number, b: number): number => a / b
const power = (a: number, b: number): number => Math.pow(a,b)
const operators = {
    "+": { fn: add, priority: 1 },
    "-": { fn: subtract, priority: 1 },
    "*": { fn: multiply, priority: 2 },
    "/": { fn: divide, priority: 2 },
    "^": { fn: power, priority: 3 },
    "(": { fn: null, priority: 0 },
    ")": { fn: null, priority: 0 }
}

const extractExprMembers = (expressionInfix: string): string[] => expressionInfix.replace(/\s+/g, '').match(/(\d+|[-+*/()/^])/g) || []
const isOperand = (token: string): boolean => !operators[token]
const isOperator = (token: string): boolean => operators[token]

export const isValidExpression = (expression: string): boolean => {
    //TODO: implement
    
    return true
}

export const toPostfix = (expressionInfix: string): string => {
    let expressionFostfix = ""

    const leftParenthesis = "("
    const rightParenthesis = ")"
    const stack = new Stack<string>()
    const exprMembers = extractExprMembers(expressionInfix)

    for (let member of exprMembers) {
        if (member === leftParenthesis) {
            stack.push(member)
            continue
        }

        if (isOperand(member)) {
            expressionFostfix += " " + member
            continue
        }

        if (member === rightParenthesis) {
            while (stack.top() !== leftParenthesis) {
                expressionFostfix += " " + stack.pop()
            }
            stack.pop()
            continue
        }

        if (isOperator(member)) {
            while (stack.top() && operators[member].priority <= operators[stack.top()].priority) {
                expressionFostfix += " " + stack.pop()
            }
            stack.push(member)
            continue
        }

    }

    while (!stack.isEmpty()) {
        expressionFostfix += " " + stack.pop()
    }

    return expressionFostfix.slice(1)
}


export const evaluatePostfix = (expressionPostfix: string): number => {
    const stack = new Stack<number>()
    const symbols = expressionPostfix.split(" ")
    
    for(let symbol of symbols) {
        if(isOperand(symbol)) {
            stack.push(Number(symbol))
            continue
        }

        if(isOperator(symbol)){
            const opearnd1 = stack.pop()
            const opearnd2 = stack.pop()
            const fn = operators[symbol].fn
            stack.push(fn(opearnd2, opearnd1))
        }
    }

    return stack.top()
}



export const calculateExpression = (expression: string): number => {
    if(!isValidExpression(expression)){
        throw new Error("Invalid expression")
    }
    
    const expressionPostfix = toPostfix(expression)
    return evaluatePostfix(expressionPostfix)
}