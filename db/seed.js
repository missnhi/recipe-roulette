import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Alice",
      email: "alice@prisma.io",
      password: "password123",
    },
    {
      name: "Chef Gordon",
      email: "realramsey@chef.com",
      password: "password234",  
    },
    {
      name: "Random Person",
      email: "therandomone@proton.com",
      password: "randompass567"
    }
  ];

  const recipes = [
    {
      title: "Spaghetti Carbonara",
      ingredients: ["spaghetti", "eggs", "pancetta", "parmesan cheese", "black pepper"],
      instructions: "Boil pasta. Cook pancetta. Mix eggs and cheese. Combine all with pasta.",
      image: "https://example.com/carbonara.jpg",
      cuisine: "Italian",
      meal: "Dinner"
    },
    {
      title: "Chicken Curry",
      ingredients: ["chicken", "curry powder", "coconut milk", "onions", "garlic"],
      instructions: "Cook onions and garlic. Add chicken and curry powder. Add coconut milk and simmer.",
      image: "https://example.com/chicken-curry.jpg",
      cuisine: "Indian",
      meal: "Dinner"
    },
    {
      title: "Beef Tacos",
      ingredients: ["ground beef", "taco shells", "lettuce", "cheese", "salsa"],
      instructions: "Cook beef. Fill taco shells with beef and toppings.",
      image: "https://example.com/beef-tacos.jpg",
      cuisine: "Mexican",
      meal: "Lunch"
    },
    {
      title: "Caesar Salad",
      ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing"],
      instructions: "Toss lettuce with croutons, cheese, and dressing.",
      image: "https://example.com/caesar-salad.jpg",
      cuisine: "American",
      meal: "Lunch"
    },
    {
      title: "Sushi Rolls",
      ingredients: ["sushi rice", "nori", "fish", "vegetables"],
      instructions: "Prepare rice. Place nori on mat. Add rice and fillings. Roll and slice.",
      image: "https://example.com/sushi-rolls.jpg",
      cuisine: "Japanese",
      meal: "Dinner"
    },
    {
      title: "Pancakes",
      ingredients: ["flour", "milk", "eggs", "baking powder", "sugar"],
      instructions: "Mix ingredients. Cook on griddle.",
      image: "https://example.com/pancakes.jpg",
      cuisine: "American",
      meal: "Breakfast"
    },
    {
      title: "Pad Thai",
      ingredients: ["rice noodles", "shrimp", "eggs", "bean sprouts", "peanuts"],
      instructions: "Cook noodles. Stir-fry shrimp and eggs. Add noodles and sauce. Top with sprouts and peanuts.",
      image: "https://example.com/pad-thai.jpg",
      cuisine: "Thai",
      meal: "Dinner"
    },
    {
      title: "Greek Salad",
      ingredients: ["tomatoes", "cucumbers", "onions", "feta cheese", "olives"],
      instructions: "Mix vegetables. Add cheese and olives. Dress with olive oil and vinegar.",
      image: "https://example.com/greek-salad.jpg",
      cuisine: "Greek",
      meal: "Lunch"
    },
    {
      title: "French Toast",
      ingredients: ["bread", "eggs", "milk", "cinnamon", "syrup"],
      instructions: "Dip bread in egg mixture. Cook on griddle. Serve with syrup.",
      image: "https://example.com/french-toast.jpg",
      cuisine: "American",
      meal: "Breakfast"
    },
    {
      title: "Margherita Pizza",
      ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "basil"],
      instructions: "Spread sauce on dough. Add cheese and basil. Bake.",
      image: "https://example.com/margherita-pizza.jpg",
      cuisine: "Italian",
      meal: "Dinner"
    }
  ];

  // const favourites = [
  //   {
  //     user_id: 1,
  //     recipe_id: 1
  //   },
  //   {
  //     user_id: 1,
  //     recipe_id: 2
  //   },
  //   {
  //     user_id: 2,
  //     recipe_id: 3
  //   },
  //   {
  //     user_id: 2,
  //     recipe_id: 4
  //   },
  //   {
  //     user_id: 3,
  //     recipe_id: 5
  //   }
  // ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }


  //only creates one instance of recipes
  for (const recipe of recipes) {
    await prisma.recipe.upsert({
      where: {title: recipe.title},
      update : {},
      create: recipe,
    });
  }

  // for (const favourite of favourites) {
  //   await prisma.favourite.upsert({
  //     where: {
  //       user_id_recipe_id: {
  //         user_id: favourite.user_id,
  //         recipe_id: favourite.recipe_id
  //       }
  //     },
  //     update: {},
  //     create: favourite,
  //   })
  // }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });