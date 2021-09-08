const ids = new Set([2, 4, 5, 2, 7]);

ids.add("abc");
ids.add(2);

for (const el of ids) {
    console.log(el);
}

console.log(ids.has("abc"));

ids.delete(4);
