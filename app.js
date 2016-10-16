
var diner = {
	name: "",
	dishes: {
		dish1: "",
		cost1: 0,
		dish2: "",
		cost2: 0
	},
	totalFood: function() {
		return this.dishes.cost1 + this.dishes.cost2;
	},
	tax: function() {
		return parseFloat((this.totalFood() * 0.10).toFixed(2));
	},
	tip: function() {
		return parseFloat((this.totalFood() * 0.15).toFixed(2));
	},
	totalAll: function() {
		return parseFloat(this.totalFood() + this.tax() + this.tip());
	},
};

var bill = {
	diners: [],
	totalEachPerson: [],
	total: function() {
		var totalForAll = 0;
		for (var i = 0; i < this.diners.length; i++) {
			var indiv = this.diners[i].totalAll();
			this.totalEachPerson.push(indiv);
			totalForAll += indiv;
		}
		return totalForAll;
	},
	breakdown: function() {
		console.log(`total for entire group: $  ${this.total()}`);
		for (var i = 0; i < this.diners.length; i++) {
			console.log(`${this.diners[i].name}: food cost: ${this.diners[i].totalFood()}`);
			console.log(`       entrees were: ${this.diners[i].dishes.dish1} and ${this.diners[i].dishes.dish2} `);
			console.log(`       tax cost: ${this.diners[i].tax()}`);
			console.log(`       tip cost: ${this.diners[i].tip()}`);
			console.log(`       total was: $ ${this.totalEachPerson[i]}`);
		}
	}
};

var dummy_data = function(person1, person2, person3) {
	console.log("YOUR BILL FROM THIS FABULOUS RESTAURANT");
	console.log("      ** * * * * * **     ");
	bill.diners.push(person1, person2, person3);
	bill.breakdown();
};


var names = ["Sally", "Bob", "Joe", "Lulu", "Mark", "Jenny"];
var the_meals = ["salad", "pancakes", "toast", "bacon", "eggs", "pizza", "fruit bowl",
				"stir-fry", "noodles", "spaghetti", "sandwich", "baguette",
				"fried-rice", "fresh rolls", "gnochhi", "burrito"];
var cost = [20, 2, 3, 7, 9, 10.50, 3.99, 4.99, 12, 18, 7.50, 8.50, 11.25];


var dummy_people = function(person) {
	person.name = names[Math.floor(names.length * Math.random())];
	person.dishes.dish1 = the_meals[Math.floor(the_meals.length * Math.random())];
	person.dishes.dish2 = the_meals[Math.floor(the_meals.length * Math.random())];
	person.dishes.cost1 = cost[Math.floor(cost.length * Math.random())];
	person.dishes.cost2 = cost[Math.floor(cost.length * Math.random())];
};


var p1 = Object.create(diner);
var p2 = Object.create(diner);
var p3 = Object.create(diner);


dummy_people(p1);
dummy_people(p2);
dummy_people(p3);
console.log(diner);

console.log(p1.name);
console.log(p1.dishes);
console.log(p2.name);
console.log(p2.dishes);
console.log(p3.name);
console.log(p3.dishes);

dummy_data(p1, p2, p3);





