let umbers = [10, 20, 10, 30, 20, 40, 30];

/*

Alice → 25
Bob   → 30
John  → 35

*/

let m = new Map();

m.set("Alice",25);
m.set("Bob",30);
m.set("John",35);

for(let i of m){
	console.log(i);
// process.stdout.write(i);
}

