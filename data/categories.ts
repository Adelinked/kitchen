interface Category {
  name: string;
  subcategories: string[];
}

const cuisineCategory: Category = {
  name: "cuisines",
  subcategories: [
    "italian",
    "mexican",
    "asian",
    "mediterranean",
    "indian",
    "american",
    "french",
    "middle eastern",
    // ... add more cuisine subcategories as needed
  ],
};

const mealsCategory: Category = {
  name: "meals",
  subcategories: [
    "breakfast",
    "lunch",
    "dinner",
    "snacks",
    "appetizers",
    // ... add more meal subcategories as needed
  ],
};

const healthyOptionsCategory: Category = {
  name: "healthy",
  subcategories: [
    "vegetarian",
    "vegan",
    "gluten-free",
    "low-carb",
    "low-calorie",
    "plant-based",
    "sugar-free",
    // ... add more healthy options subcategories as needed
  ],
};

const beveragesCategory: Category = {
  name: "beverages",
  subcategories: [
    "smoothies",
    "cocktails",
    "hot drinks",
    "cold brews",
    "mocktails",
    "fresh juices",
    "sodas",
    // ... add more beverage subcategories as needed
  ],
};

const ingredientsCategory: Category = {
  name: "ingredients",
  subcategories: [
    "vegetables",
    "fruits",
    "meat",
    "seafood",
    "herbs and spices",
    "dairy",
    "grains",
    // ... add more ingredient subcategories as needed
  ],
};

const dessertsCategory: Category = {
  name: "desserts",
  subcategories: [
    "cakes",
    "cookies",
    "pies",
    "ice cream",
    "puddings",
    "cupcakes",
    "chocolate",
    // ... add more dessert subcategories as needed
  ],
};

const occasionsCategory: Category = {
  name: "occasions",
  subcategories: [
    "holiday specials",
    "party favorites",
    "celebration cakes",
    "festive drinks",
    // ... add more occasion subcategories as needed
  ],
};

export const categories: Category[] = [
  cuisineCategory,
  ingredientsCategory,
  mealsCategory,
  healthyOptionsCategory,
  occasionsCategory,
  beveragesCategory,
  dessertsCategory,
];
