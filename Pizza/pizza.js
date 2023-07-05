class Pizza {
  constructor(name, ingridients) {
    this.name = name;
    this.ingridients = ingridients;
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

  preparePizza(name, ingridients) {
    if (this.hasPizza(name)) {
      throw new Error("Pizza name already exists");
    }

    if (ingridients.length === 0) {
      throw new Error("Invalid ingridients");
    }

    if (ingridients.includes("Unknown")) {
      throw new Error("Invalid ingridients");
    }

    const pizza = new Pizza(name, ingridients);
    this.pizzas.push(pizza);
    return pizza;
  }

  getPizzaCount() {
    return this.pizzas.length;
  }
}

module.exports = { Pizza, PizzaRestaurant };
