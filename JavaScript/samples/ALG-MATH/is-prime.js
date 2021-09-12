function isPrime(x) {
    for (let i = 2; i < Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}

console.log(isPrime(10));
console.log(isPrime(6));
console.log(isPrime(2));
console.log(isPrime(1));
