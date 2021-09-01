function recurse(value) {
    return value === 1 ? 1 : value * recurse(value - 1);
}

let numeral = 3;
console.log(recurse(numeral));
