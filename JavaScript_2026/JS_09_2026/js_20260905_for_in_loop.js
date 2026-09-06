let car = {
    brand: "BMW",
    year: 2025
};


for (let key in car) {
    console.log(key);
}


for (let key in car) {
    console.log(key, car[key]);
}

