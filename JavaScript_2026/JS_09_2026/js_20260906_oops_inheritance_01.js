class Animal{
	 constructor(name){
		  this.name = name;
	 }

	 speak(){
		  console.log(this.name + " makes a sound");
	 }
}

class Dog extends Animal{
	constructor(name){
		  super(name);
	}

	speak(){
		  console.log(this.name + " makes a sound");
	}
}

let d1 = new Animal();

let d2 = new Dog("Dangu");

d1.speak();

d2.speak();

