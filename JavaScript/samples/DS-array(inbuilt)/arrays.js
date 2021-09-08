const a = [5, "name", true, { max: "Manu" }];

const names = ["Max", "Manu", "Julie"];

// Index Starts at zero
console.log(names[0]);

// Loop through array
for (const el of names) {
    console.log(el);
}

// Length of array
names.length;

// Add item to array
names.push("Jason");

// Remove (1) element after an index (2)
names.splice(2, 1);

// Useful for finding objects by loop
names.find((el) => el === "Julie");

// Useful for finding items by loop
const julieIndex = names.findIndex((el) => el === "Julie");
