function isPowerOfTwo(number) {
    if (number < 1) return false;

    // let dividedReturn = number;
    // while (dividedReturn !== 1) {
    //     if (dividedReturn % 2 !== 0) return false;
    //     dividedReturn = dividedReturn / 2;
    // }
    // return true;(

    return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));
