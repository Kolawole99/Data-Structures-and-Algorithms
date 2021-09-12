function fib(x) {
    let sequence = [1, 1];

    for (let i = 2; i < x + 1; i++) {
        let newSequenceNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(newSequenceNumber);
    }

    return sequence[x];
}

console.log(fib(4));
console.log(fib(5));
