function minValue(arrayOfNumbers) {
    let minimumValue = arrayOfNumbers[0];
    for (const number of arrayOfNumbers) {
        if (number < minimumValue) {
            minimumValue = number;
        }
    }
    return minimumValue;
}

console.log(minValue([9, 8, 3, 1, 5, 2, 1, 7]));
console.log(minValue([1, 2, 3]));

function isEven(number) {
    if (number % 2 === 0) return true;
    return false;
}

console.log(isEven(7));
console.log(isEven(12));
console.log(isEven(21));
