const recipeData = [
  {
    title: "Classic Margherita Pizza",
    category: "Dinner",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Fresh Basil",
      "Olive Oil"
    ],
    instructions:
      "Spread tomato sauce over the dough, add mozzarella cheese, bake at 220°C for 15 minutes, garnish with fresh basil and olive oil.",
    // cookingTime: 30,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
  },
  {
    title: "Paneer Butter Masala",
    category: "Dinner",
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Butter",
      "Cream",
      "Onion",
      "Spices"
    ],
    instructions:
      "Cook onion and tomato gravy, blend until smooth, add spices, paneer cubes, butter, and cream. Simmer for 10 minutes.",
    // cookingTime: 40,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
  },
  {
    title: "Veg Fried Rice",
    category: "Lunch",
    ingredients: [
      "Rice",
      "Carrot",
      "Beans",
      "Capsicum",
      "Soy Sauce",
      "Garlic"
    ],
    instructions:
      "Stir fry vegetables with garlic, add cooked rice, soy sauce, and toss over high flame.",
    // cookingTime: 25,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19"
  },
  {
    title: "Chicken Biryani",
    category: "Dinner",
    ingredients: [
      "Chicken",
      "Basmati Rice",
      "Yogurt",
      "Onions",
      "Spices"
    ],
    instructions:
      "Marinate chicken, cook rice separately, layer both together, and cook on dum for 30 minutes.",
    // cookingTime: 90,
    Description: "Tasty The :)",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51f"
  },
  {
    title: "Masala Dosa",
    category: "Breakfast",
    ingredients: [
      "Dosa Batter",
      "Potatoes",
      "Mustard Seeds",
      "Curry Leaves"
    ],
    instructions:
      "Prepare potato filling, spread dosa batter on hot tawa, add filling, fold and serve.",
    // cookingTime: 35,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    title: "Chocolate Brownie",
    category: "Dessert",
    ingredients: [
      "Chocolate",
      "Butter",
      "Flour",
      "Sugar",
      "Eggs"
    ],
    instructions:
      "Mix ingredients, pour into baking tray, bake for 30 minutes at 180°C.",
    // cookingTime: 45,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  },
  {
    title: "Caesar Salad",
    category: "Salad",
    ingredients: [
      "Lettuce",
      "Croutons",
      "Parmesan",
      "Caesar Dressing"
    ],
    instructions:
      "Mix lettuce with dressing, add croutons and parmesan cheese before serving.",
    // cookingTime: 15,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1"
  },
  {
    title: "Mango Smoothie",
    category: "Drinks",
    ingredients: [
      "Mango",
      "Milk",
      "Honey",
      "Ice Cubes"
    ],
    instructions:
      "Blend all ingredients until smooth and serve chilled.",
    // cookingTime: 10,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
  },
  {
    title: "Grilled Sandwich",
    category: "Snacks",
    ingredients: [
      "Bread",
      "Cheese",
      "Tomato",
      "Onion",
      "Butter"
    ],
    instructions:
      "Assemble sandwich, butter the bread, grill until crispy.",
    // cookingTime: 20,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
  },
  {
    title: "Pasta Alfredo",
    category: "Dinner",
    ingredients: [
      "Pasta",
      "Cream",
      "Butter",
      "Garlic",
      "Parmesan"
    ],
    instructions:
      "Cook pasta, prepare creamy Alfredo sauce, toss together and serve.",
    // cookingTime: 30,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
  },
  {
    title: "Chole Bhature",
    category: "Lunch",
    ingredients: [
      "Chickpeas",
      "Onion",
      "Tomatoes",
      "Bhature Dough"
    ],
    instructions: "Cook spicy chole and deep fry bhature until puffed.",
    // cookingTime: 60,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
  },
  {
    title: "Vegetable Soup",
    category: "Soup",
    ingredients: [
      "Carrot",
      "Beans",
      "Corn",
      "Pepper",
      "Vegetable Stock"
    ],
    instructions: "Boil vegetables with stock and season well.",
    // cookingTime: 35,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
  },
  {
    title: "Tacos",
    category: "Dinner",
    ingredients: [
      "Taco Shells",
      "Chicken",
      "Lettuce",
      "Cheese",
      "Salsa"
    ],
    instructions: "Fill taco shells with cooked chicken and toppings.",
    // cookingTime: 30,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85"
  },
  {
    title: "French Toast",
    category: "Breakfast",
    ingredients: [
      "Bread",
      "Eggs",
      "Milk",
      "Cinnamon"
    ],
    instructions: "Dip bread in egg mixture and toast until golden.",
    // cookingTime: 15,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929"
  },
  {
    title: "Chicken Curry",
    category: "Dinner",
    ingredients: [
      "Chicken",
      "Onion",
      "Tomato",
      "Spices"
    ],
    instructions: "Cook chicken with onion tomato gravy until tender.",
    // cookingTime: 50,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    title: "Veg Noodles",
    category: "Lunch",
    ingredients: [
      "Noodles",
      "Vegetables",
      "Soy Sauce"
    ],
    instructions: "Cook noodles and stir fry with vegetables.",
    // cookingTime: 20,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d"
  },
  {
    title: "Banana Pancakes",
    category: "Breakfast",
    ingredients: [
      "Banana",
      "Flour",
      "Egg",
      "Milk"
    ],
    instructions: "Mix batter and cook pancakes on medium heat.",
    // cookingTime: 20,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
  },
  {
    title: "Chocolate Milkshake",
    category: "Drinks",
    ingredients: [
      "Milk",
      "Chocolate Syrup",
      "Ice Cream"
    ],
    instructions: "Blend everything until creamy.",
    // cookingTime: 5,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc"
  },
  {
    title: "Garlic Bread",
    category: "Snacks",
    ingredients: [
      "Bread",
      "Butter",
      "Garlic",
      "Parsley"
    ],
    instructions: "Spread garlic butter and bake until crispy.",
    // cookingTime: 15,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c"
  },
  {
    title: "Mushroom Risotto",
    category: "Dinner",
    ingredients: [
      "Rice",
      "Mushrooms",
      "Butter",
      "Parmesan"
    ],
    instructions: "Slow cook rice with broth and mushrooms.",
    // cookingTime: 45,
    Description: "Tasty The :)",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
  },
  {
    title: "Greek Salad",
    category: "Salad",
    ingredients: [
      "Cucumber",
      "Tomatoes",
      "Olives",
      "Feta"
    ],
    instructions: "Mix vegetables and drizzle olive oil.",
    // cookingTime: 10,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af"
  },
  {
    title: "Strawberry Smoothie",
    category: "Drinks",
    ingredients: [
      "Strawberries",
      "Milk",
      "Honey"
    ],
    instructions: "Blend until smooth.",
    // cookingTime: 5,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888"
  },
  {
    title: "Butter Chicken",
    category: "Dinner",
    ingredients: [
      "Chicken",
      "Butter",
      "Cream",
      "Tomato"
    ],
    instructions: "Cook marinated chicken in buttery tomato gravy.",
    // cookingTime: 60,
    Description: "Tasty The :)",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    title: "Samosa",
    category: "Snacks",
    ingredients: [
      "Potatoes",
      "Flour",
      "Spices"
    ],
    instructions: "Stuff dough and deep fry.",
    // cookingTime: 40,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    title: "Pav Bhaji",
    category: "Dinner",
    ingredients: [
      "Mixed Vegetables",
      "Butter",
      "Pav"
    ],
    instructions: "Cook mashed vegetables with spices and butter.",
    // cookingTime: 45,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841"
  },
  {
    title: "Apple Pie",
    category: "Dessert",
    ingredients: [
      "Apples",
      "Flour",
      "Butter",
      "Sugar"
    ],
    instructions: "Prepare pie filling and bake.",
    // cookingTime: 70,
    Description: "Tasty The :)",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a7"
  },
  {
    title: "Vanilla Ice Cream",
    category: "Dessert",
    ingredients: [
      "Milk",
      "Cream",
      "Vanilla",
      "Sugar"
    ],
    instructions: "Churn chilled mixture until frozen.",
    // cookingTime: 240,
    Description: "Tasty The :)",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
  },
  {
    title: "Omelette",
    category: "Breakfast",
    ingredients: [
      "Eggs",
      "Onion",
      "Cheese"
    ],
    instructions: "Beat eggs and cook with fillings.",
    // cookingTime: 10,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71"
  },
  {
    title: "Lemon Tea",
    category: "Drinks",
    ingredients: [
      "Tea",
      "Lemon",
      "Honey"
    ],
    instructions: "Brew tea and add lemon juice.",
    // cookingTime: 8,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    title: "Veg Burger",
    category: "Fast Food",
    ingredients: [
      "Burger Bun",
      "Veg Patty",
      "Lettuce",
      "Cheese",
      "Tomato"
    ],
    instructions: "Assemble burger with patty and vegetables.",
    // cookingTime: 25,
    Description: "Tasty The :)",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  }
];

module.exports = {data: recipeData}