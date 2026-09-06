let numbers = [10, 20, 30, 40, 50];

for (a of numbers){
	 console.log(a)
}

console.log();
numbers.push(60);
for (a of numbers){
	 console.log(a)
}

console.log();
numbers.pop();

for (a of numbers){
	 console.log(a)
}

console.log();-len
let len = numbers.length;
console.log(len);