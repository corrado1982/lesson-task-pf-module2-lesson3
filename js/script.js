//question 1

var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);

//question 2

var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (var i = 0; i < animals.length; i++) {

    console.log(animals[i].colour);
    
}

//question 3

var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (var i = 0; i < dinnerOptions.length; i++) {

    if (dinnerOptions[i].onSpecial === true) {
        console.log(dinnerOptions[i].name);
    } 

}


//question 4

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];



for (var i = 0; i < people.length; i++) {

    var fullName = people[i].firstName + " " + people[i].lastName;

    if ((people[i].age <= 50) && (people[i].age >= 20)) {

        

        console.log(fullName);
    }
}


//question 5

var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];

for (var i = 0; i < products.length; i++){
    
var list = "<li>" + products[i].name + " - " + products[i].price + "</li>" ;
 
var unList = document.querySelector("ul");

unList.innerHTML += list ;

}
