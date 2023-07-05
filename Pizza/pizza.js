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

    if (ingredients.includes("Unknown")) {
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

module.exports = { Pizza, PizzaRestaurant };
