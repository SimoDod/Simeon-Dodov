class Pizza {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class PizzaRestaurant {
  constructor() {
    this.pizzas = [];
  }
  hasPizza(name) {
    const lowerCaseName = name.toLowerCase().trim();
    return this.pizzas.some(
      (pizza) => pizza.name.toLowerCase().trim() === lowerCaseName
    );
  }

  preparePizza(name, ingredients) {
    if (this.hasPizza(name)) {
      throw new Error("Pizza name already exists");
    }

    if (ingredients.length === 0) {
      throw new Error("Invalid ingredients");
    }

    const recognizedIngredients = [
      "Tomato",
      "Mozzarella",
      "Basil",
      "Pepperoni",
      "Pineapple",
      "Ham",
      "Onions",
    ];
    const unrecognizedIngredients = ingredients.filter(
      (ingredient) => !recognizedIngredients.includes(ingredient)
    );
    if (unrecognizedIngredients.length > 0) {
      throw new Error("Invalid ingredients");
    }

    const pizza = new Pizza(name, ingredients);
    this.pizzas.push(pizza);
    return pizza;
  }

  getPizzaCount() {
    return this.pizzas.length;
  }
}
const pizzaPlace = new PizzaRestaurant();
const pizza = pizzaPlace.preparePizza("Best Pizza", ["Ham", "Pineapple"]);
console.log(pizza.name);
console.log(pizzaPlace);

module.exports = { Pizza, PizzaRestaurant };
