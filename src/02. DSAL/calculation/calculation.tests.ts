import { calculateExpression } from './calculation';


const testCases = {
    "10^3": 1000,
    "10+15": 25,
    "250-300": -50,
    "100*2": 200,
    "100/2": 50,
    "100+250*2": 600,
    "100+250/2": 225,
    "100+250*2-100": 500,
    "(100+250)/2-100": 75,
    "100+250*(2-100/2)": -11900,
    "(100+250)*(2-100/2)+1000": -15800,
    "100+250*(2-(15+(100/2-50)+1000))": -253150
}

export const simpleCalculationTests = () => {
    for (let testCase in testCases) {
        console.log(testCase, calculateExpression(testCase) === testCases[testCase])
    }
}

