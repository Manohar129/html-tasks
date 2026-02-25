function calculate() {
    const display = document.getElementById('display');
    const expression = display.innerText;

    try {
        const numbers = expression.split(/[\+\-\*\/]/).map(Number);
        const operators = expression.replace(/[0-9.]/g, '').split('');

        let result = numbers[0];

        for (let i = 0; i < operators.length; i++) {
            const nextNumber = numbers[i + 1];
            const operator = operators[i];

            if (operator === '+') result += nextNumber;
            if (operator === '-') result -= nextNumber;
            if (operator === '*') result *= nextNumber;
            if (operator === '/') {
                if (nextNumber === 0) throw new Error("DivByZero");
                result /= nextNumber;
            }
        }

        display.innerText = result;
    } catch (e) {
        display.innerText = 'Error';
    }
}