let s = new Set();

s.add(10);
s.add(20);
s.add(10);
s.add(30);

console.log(s.size);

for(let se of s){
	console.log(se);
}
