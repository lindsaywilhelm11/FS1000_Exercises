function calculateDogAge(age) {
    var age = document.getElementById('age');
    var dogAge = document.getElementById('dogAge');
    var dogAge = 7*age;
    console.log("Your doggie is " + dogAge + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);