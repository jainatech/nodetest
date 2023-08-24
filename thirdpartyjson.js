
 const ecommerce= [
    {
      // "id": "p001",
      "name": "Smartphone X",
      "price": 599.99,
      "description": "A powerful smartphone with advanced features.",
      "category": "Electronics",
      "stock": 25
    },
    {
      // "id": "p002",
      "name": "Laptop Y",
      "price": 1299.99,
      "description": "High-performance laptop for both work and entertainment.",
      "category": "Computers",
      "stock": 10
    },
    {
      // "id": "p003",
      "name": "Casual T-Shirt",
      "price": 19.99,
      "description": "Comfortable cotton t-shirt for everyday wear.",
      "category": "Clothing",
      "stock": 50
    },
    {
      // "id": "p004",
      "name": "Running Shoes",
      "price": 89.99,
      "description": "Breathable running shoes with great arch support.",
      "category": "Shoes",
      "stock": 15
    },
    {
      // "id": "p005",
      "name": "Cookware Set",
      "price": 149.95,
      "description": "A set of non-stick cookware for your kitchen needs.",
      "category": "Home & Kitchen",
      "stock": 8
    }
  ]
 const movies = [
    {
      // "id": "m001",
      "title": "Inception",
      "release_year": 2010,
      "director": "Christopher Nolan",
      "genres": ["Sci-Fi", "Action", "Thriller"],
      "rating": 8.8
    },
    {
      // "id": "m002",
      "title": "The Shawshank Redemption",
      "release_year": 1994,
      "director": "Frank Darabont",
      "genres": ["Drama", "Crime"],
      "rating": 9.3
    },
    {
      // "id": "m003",
      "title": "Pulp Fiction",
      "release_year": 1994,
      "director": "Quentin Tarantino",
      "genres": ["Crime", "Drama"],
      "rating": 8.9
    },
    {
      // "id": "m004",
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "release_year": 2001,
      "director": "Peter Jackson",
      "genres": ["Adventure", "Fantasy"],
      "rating": 8.8
    },
    {
      // "id": "m005",
      "title": "Avatar",
      "release_year": 2009,
      "director": "James Cameron",
      "genres": ["Action", "Adventure", "Sci-Fi"],
      "rating": 7.8
    }
  ]
 const music= [
    {
      // "id": "t001",
      "title": "Shape of You",
      "artist": "Ed Sheeran",
      "album": "÷",
      "genres": ["Pop"],
      "release_year": 2017,
      "duration": "3:53"
    },
    {
      // "id": "t002",
      "title": "Bohemian Rhapsody",
      "artist": "Queen",
      "album": "A Night at the Opera",
      "genres": ["Rock"],
      "release_year": 1975,
      "duration": "5:55"
    },
    {
      // "id": "t003",
      "title": "Rolling in the Deep",
      "artist": "Adele",
      "album": "21",
      "genres": ["Pop", "Soul"],
      "release_year": 2010,
      "duration": "3:48"
    },
    {
      // "id": "t004",
      "title": "Billie Jean",
      "artist": "Michael Jackson",
      "album": "Thriller",
      "genres": ["Pop", "Funk"],
      "release_year": 1983,
      "duration": "4:54"
    },
    {
      // "id": "t005",
      "title": "Smells Like Teen Spirit",
      "artist": "Nirvana",
      "album": "Nevermind",
      "genres": ["Grunge", "Rock"],
      "release_year": 1991,
      "duration": "5:01"
    }
  ]

 const recipes= [
    {
      // "id": "r001",
      "name": "Spaghetti Carbonara",
      "cuisine": "Italian",
      "ingredients": [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g Pecorino cheese",
        "Freshly ground black pepper"
      ],
      "instructions": [
        "Cook the spaghetti in boiling salted water until al dente.",
        "Fry the pancetta until crispy and golden.",
        "In a bowl, whisk together eggs, grated Pecorino cheese, and black pepper.",
        "Combine the cooked spaghetti with the pancetta, then mix in the egg mixture.",
        "Serve immediately with extra Pecorino and black pepper on top."
      ]
    },
    {
      // "id": "r002",
      "name": "Chicken Stir-Fry",
      "cuisine": "Asian",
      "ingredients": [
        "400g boneless chicken breast, sliced",
        "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
        "3 tablespoons soy sauce",
        "2 tablespoons oyster sauce",
        "1 tablespoon sesame oil",
        "2 cloves garlic, minced"
      ],
      "instructions": [
        "Heat sesame oil in a pan or wok over high heat.",
        "Add minced garlic and sliced chicken. Stir-fry until chicken is cooked.",
        "Add mixed vegetables and stir-fry for a few minutes until crisp-tender.",
        "Pour in soy sauce and oyster sauce. Stir well to combine.",
        "Serve the stir-fry over cooked rice or noodles."
      ]
    },
    {
      // "id": "r003",
      "name": "Caprese Salad",
      "cuisine": "Mediterranean",
      "ingredients": [
        "3 large tomatoes, sliced",
        "200g fresh mozzarella cheese, sliced",
        "Fresh basil leaves",
        "Extra virgin olive oil",
        "Balsamic vinegar",
        "Salt and pepper"
      ],
      "instructions": [
        "Alternate slices of tomato and mozzarella on a serving platter.",
        "Tuck fresh basil leaves between the tomato and cheese slices.",
        "Drizzle extra virgin olive oil and balsamic vinegar over the salad.",
        "Season with salt and pepper to taste.",
        "Serve as a light and refreshing appetizer."
      ]
    },
    {
      // "id": "r004",
      "name": "Vegetable Curry",
      "cuisine": "Indian",
      "ingredients": [
        "2 cups mixed vegetables (potatoes, carrots, peas)",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "3 cloves garlic, minced",
        "1 tablespoon curry powder",
        "1 teaspoon turmeric",
        "400ml coconut milk",
        "Fresh cilantro, for garnish"
      ],
      "instructions": [
        "In a pot, sauté chopped onion and minced garlic until golden.",
        "Add curry powder and turmeric. Cook for a minute until fragrant.",
        "Add chopped tomatoes and cook until they break down.",
        "Stir in mixed vegetables and coconut milk. Simmer until vegetables are tender.",
        "Garnish with fresh cilantro and serve with rice or bread."
      ]
    },
    {
      // "id": "r005",
      "name": "Classic Chocolate Chip Cookies",
      "cuisine": "Dessert",
      "ingredients": [
        "1 cup butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup brown sugar",
        "1 teaspoon vanilla extract",
        "2 large eggs",
        "2 1/4 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1/2 teaspoon salt",
        "2 cups chocolate chips"
      ],
      "instructions": [
        "Preheat the oven to 375°F (190°C).",
        "In a bowl, cream together butter, granulated sugar, brown sugar, and vanilla.",
        "Beat in eggs, one at a time, until well mixed.",
        "In a separate bowl, combine flour, baking soda, and salt. Gradually add to the butter mixture.",
        "Stir in chocolate chips.",
        "Drop spoonfuls of dough onto baking sheets. Bake for 9-11 minutes or until golden.",
        "Cool on baking sheets for a few minutes before transferring to a wire rack."
      ]
    }
  ]

 const real_estate= [
    {
      // "id": "prop001",
      "name": "Modern Condo in Downtown",
      "type": "Condo",
      "price": 450000,
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 1200,
      "location": "Downtown City",
      "description": "A stylish and modern condo with great city views.",
      "features": ["Balcony", "Fitness Center", "Parking"],
      "image": "https://example.com/images/property001.jpg"
    },
    {
      // "id": "prop002",
      "name": "Spacious Family Home",
      "type": "House",
      "price": 620000,
      "bedrooms": 4,
      "bathrooms": 3,
      "area": 2500,
      "location": "Suburban Area",
      "description": "A spacious home with a large backyard, perfect for families.",
      "features": ["Backyard", "Fireplace", "Garage"],
      "image": "https://example.com/images/property002.jpg"
    },
    {
      // "id": "prop003",
      "name": "Luxury Penthouse",
      "type": "Penthouse",
      "price": 1500000,
      "bedrooms": 3,
      "bathrooms": 4,
      "area": 3000,
      "location": "High-end District",
      "description": "A luxurious penthouse with top-of-the-line amenities and stunning views.",
      "features": ["Private Terrace", "Swimming Pool", "Concierge Service"],
      "image": "https://example.com/images/property003.jpg"
    },
    {
      // "id": "prop004",
      "name": "Cozy Suburban Townhouse",
      "type": "Townhouse",
      "price": 320000,
      "bedrooms": 3,
      "bathrooms": 2,
      "area": 1800,
      "location": "Quiet Neighborhood",
      "description": "A charming townhouse with a cozy atmosphere and easy access to parks.",
      "features": ["Front Yard", "Community Park", "Modern Kitchen"],
      "image": "https://example.com/images/property004.jpg"
    },
    {
      // "id": "prop005",
      "name": "Rural Retreat",
      "type": "Farmhouse",
      "price": 550000,
      "bedrooms": 5,
      "bathrooms": 3,
      "area": 4000,
      "location": "Countryside",
      "description": "A farmhouse nestled in the peaceful countryside, surrounded by nature.",
      "features": ["Large Garden", "Barn", "Scenic Views"],
      "image": "https://example.com/images/property005.jpg"
    }
  ]

 const blog_post= [
    {
      // "id": "post001",
      "title": "My Travel Adventures in Europe",
      "author": "Jane Doe",
      "date": "2023-07-15",
      "content": "I recently embarked on an incredible journey through Europe...",
      "tags": ["Travel", "Europe", "Adventure"],
      "image": "https://example.com/images/post001.jpg"
    },
    {
      // "id": "post002",
      "title": "Exploring New Culinary Delights",
      "author": "John Smith",
      "date": "2023-06-28",
      "content": "My taste buds were treated to a gastronomic extravaganza...",
      "tags": ["Food", "Cuisine", "Travel"],
      "image": "https://example.com/images/post002.jpg"
    },
    {
      // "id": "post003",
      "title": "Lessons Learned From My Solo Hike",
      "author": "Emily Johnson",
      "date": "2023-05-10",
      "content": "Embarking on a solo hike taught me valuable life lessons...",
      "tags": ["Hiking", "Adventure", "Personal Growth"],
      "image": "https://example.com/images/post003.jpg"
    },
    {
      // "id": "post004",
      "title": "Rediscovering Creativity Through Painting",
      "author": "Alex Turner",
      "date": "2023-04-02",
      "content": "Engaging with a canvas and paints rekindled my creative spark...",
      "tags": ["Art", "Creativity", "Inspiration"],
      "image": "https://example.com/images/post004.jpg"
    },
    {
      // "id": "post005",
      "title": "Musings on the Changing Seasons",
      "author": "Sophie Williams",
      "date": "2023-03-15",
      "content": "As winter fades and spring emerges, reflections on the passage of time...",
      "tags": ["Seasons", "Reflection", "Life"],
      "image": "https://example.com/images/post005.jpg"
    }
  ]

module.exports={ecommerce, movies, music, blog_post, recipes, real_estate}
