class Car{
	 constructor(name, number){
		  this.name = name;
		  this.number = number;
	 }

	 showDetails(){
		  console.log(this.name, this.number);
	 }
}


let car1 = new Car("BMW", 120);
let car2 = new Car("Audi",150);

car1.showDetails();
car2.showDetails();

