const resultData = new Map();

resultData.set("average", 1.54);
resultData.set("lasResult", null);

const germany = { name: "Germany", population: 83 };

resultData.set(germany, 0.89);

for (const el of resultData) {
    console.log(el);
}

resultData.get("average");
