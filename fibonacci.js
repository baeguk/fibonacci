function fibonacci(num) {
    let a = 0, b = 1, temp;
    while (b<= num) {
        if (b === num) {
            return `${num} pertence a sequencia de Fibonacci`;
        }
        temp = b;
        b = a + b;
        a = temp;
    }
    return `${num} não pertence a sequencia de Fibonacci`;
}

//Exemplo: 
console.log(fibonacci(3));
console.log(ficonacci(14));