const { Pizza, PizzaRestaurant } = require("./pizza.js");

describe("Pizza", () => {
  test.only("should create a new pizza with given name and ingredients", () => {
    const pizza = new Pizza("Margherita", ["Tomato", "Mozzarella", "Basil"]);

    expect(pizza).toBeInstanceOf(Pizza);
    expect(pizza.name).toBe("Margherita");
    expect(pizza.ingredients).toEqual(["Tomato", "Mozzarella", "Basil"]);
  });
});

describe("PizzaRestaurant", () => {
  let restaurant;

  beforeEach(() => {
    restaurant = new PizzaRestaurant();
  });

  test.only("should prewpare a new pizza", () => {
    const pizza = restaurant.preparePizza("Margherita", [
      "Tomato",
      "Mozzarella",
      "Basil",
    ]);

    expect(pizza).toBeInstanceOf(Pizza);
    expect(pizza.name).toBe("Margherita");
    expect(pizza.ingredients).toEqual(["Tomato", "Mozzarella", "Basil"]);
  });

  test.only("should add a new pizza to the pizzas array", () => {
    restaurant.preparePizza("Margherita", [
      "Tomato",
      "Mozzarella",
      "Basil",
    ]);
    expect(restaurant.pizzas).toHaveLength(1);
  });

  test.only("should prepare multiple pizzas", () => {
    const pizza1 = restaurant.preparePizza("Pepperoni", [
      "Tomato",
      "Mozzarella",
      "Pepperoni",
    ]);
    const pizza2 = restaurant.preparePizza("Hawaiian", [
      "Tomato",
      "Mozzarella",
      "Pineapple",
      "Ham",
    ]);

    expect(restaurant.pizzas).toHaveLength(2);
    expect(restaurant.pizzas).toContain(pizza1);
    expect(restaurant.pizzas).toContain(pizza2);
  });

  test.only("should check if a pizza by a given name has been prepared", () => {
    restaurant.preparePizza("Margherita", ["Tomato", "Mozzarella", "Basil"]);

    expect(restaurant.hasPizza("Margherita")).toBe(true);
    expect(restaurant.hasPizza("Pepperoni")).toBe(false);
  });

  test.only("should get the number of pizzas that have been prepared", () => {
    restaurant.preparePizza("Margherita", ["Tomato", "Mozzarella", "Basil"]);
    restaurant.preparePizza("Pepperoni", ["Tomato", "Mozzarella", "Pepperoni"]);

    expect(restaurant.getPizzaCount()).toBe(2);
  });

  test.only("should not prepare a pizza with the same name twice", () => {
    restaurant.preparePizza("Margherita", ["Tomato", "Mozzarella", "Basil"]);
    expect(() => {
      restaurant.preparePizza("Margherita", ["Tomato", "Mozzarella", "Basil"]);
    }).toThrow(Error);
  });

  test.only("should not allow to prepare a pizza with no ingredients", () => {
    expect(() => {
      restaurant.preparePizza("Cheese", []);
    }).toThrow("Invalid ingredients");
  });

  test.only("should not allow to prepare a pizza with unrecognized ingredients", () => {
    expect(() => {
      restaurant.preparePizza("Veggie", ["Tomato", "Mozzarella", "Unknown"]);
    }).toThrow("Invalid ingredients");
  });

  test.only("should allow to prepare a pizza with recognized ingredients", () => {
    const pizza = restaurant.preparePizza("Veggie", [
      "Tomato",
      "Mozzarella",
      "Onions",
    ]);

    expect(pizza).toBeInstanceOf(Pizza);
    expect(pizza.name).toBe("Veggie");
    expect(pizza.ingredients).toEqual(["Tomato", "Mozzarella", "Onions"]);
  });

  test.only("should not allow to prepare a pizza with a name that already exists (case-insensitive)", () => {
    restaurant.preparePizza("Margherita", ["Tomato", "Mozzarella", "Basil"]);
    expect(() => {
      restaurant.preparePizza("margherita", ["Tomato", "Mozzarella", "Basil"]);
    }).toThrow("Pizza name already exists");
  });

  test.only("should not allow to prepare a pizza with a name that already exists (ignoring leading/trailing spaces)", () => {
    restaurant.preparePizza("Pepperoni", ["Tomato", "Mozzarella", "Pepperoni"]);
    expect(() => {
      restaurant.preparePizza(" Pepperoni ", [
        "Tomato",
        "Mozzarella",
        "Pepperoni",
      ]);
    }).toThrow("Pizza name already exists");
  });
});