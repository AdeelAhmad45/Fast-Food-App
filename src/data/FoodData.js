const FoodData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
    name: "Onion Pizza",
    price: 150,
    desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
    category: "Lunch",
    rating: 4.5,
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/cheese-pizza_74190-2512.jpg?w=1060&t=st=1697950607~exp=1697951207~hmac=b0e0d64917eaa815c174b0d7ef4f452b4ff6f26a7822e1d1b8a30e7df54adcd9",
    name: "Margherita Pizza",
    price: 130,
    desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
    category: "Lunch",
    rating: 4.2,
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?w=740&t=st=1697950700~exp=1697951300~hmac=5c0f9acd7db342c7a2dea7496006b274556647ee411a8a83fe7f6b1e7e4120e7",
    name: "Pepperoni Pizza",
    price: 160,
    desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
    category: "Lunch",
    rating: 4.6,
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/mushroom-pizza-vegetarian-white-background-isolated-still-life-copy-space-top-view-flat-lay_639032-295.jpg?w=740&t=st=1697950798~exp=1697951398~hmac=10221cd109a3a876f9e9017eeceb7ff8e4eecaf5f810e7e06111558aa9f92e8f",
    name: "Mushroom and Spinach Pizza",
    price: 140,
    desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
    category: "Lunch",
    rating: 4.2,
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?w=1060&t=st=1697950883~exp=1697951483~hmac=eea34a0fa2d37b32b1e70ebd0dcced655e59a0349552641243b9cca9ca83a251",
    name: "BBQ Chicken Pizza",
    price: 170,
    desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
    category: "Lunch",
    rating: 4.8,
  },
  {
    id: 6,
    img: "https://img.freepik.com/premium-vector/delicious-fluffy-pancake-with-honey-butter-toppings-white-background_281653-999.jpg?w=1060",
    name: "Classic Pancakes",
    price: 80,
    desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 7,
    img: "https://img.freepik.com/free-photo/croissants-table_144627-21535.jpg?w=740&t=st=1697951180~exp=1697951780~hmac=5753835d5a3c234119fff88616364c81a230bbe18efb5abb5a0631ff7677d073",
    name: "Egg and Bacon Croissant",
    price: 110,
    desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
    category: "Breakfast",
    rating: 4.2,
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-photo/trifle-dessert-with-berries-cream-isolated-white-background-ai-generative_123827-24183.jpg?w=1060&t=st=1697951914~exp=1697952514~hmac=027acf20a6520e8788f95c3c7994117bb524b27c40a91cd93c066679dc09b311",
    name: "Greek Yogurt Parfait",
    price: 95,
    desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
    category: "Breakfast",
    rating: 4.1,
  },
  {
    id: 9,
    img: "https://img.freepik.com/premium-photo/open-avocado-sandwich-with-chia-seeds-seasoning-whole-grain-bread-isolated-white_1000714-207.jpg?w=740",
    name: "Avocado Toast",
    price: 120,
    desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
    category: "Breakfast",
    rating: 4.6,
  },
  {
    id: 10,
    img: "https://img.freepik.com/premium-photo/ai-generated-illustration-wooden-bowl-acai-with-fresh-fruits-berries_665346-41621.jpg?w=740",
    name: "Fruit and Nut Oatmeal",
    price: 85,
    desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 11,
    img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    name: "Grilled Salmon",
    price: 190,
    desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
    category: "Dinner",
    rating: 4.5,
  },
  {
    id: 12,
    img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    name: "Chicken Alfredo Pasta",
    price: 160,
    desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 13,
    img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    name: "Vegetable Stir-Fry",
    price: 130,
    desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    category: "Dinner",
    rating: 4.2,
  },
  {
    id: 14,
    img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    name: "Grilled Chicken Burrito Bowl",
    price: 160,
    desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    category: "Dinner",
    rating: 4.6,
  },
  {
    id: 15,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Mushroom Risotto",
    price: 175,
    desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
    category: "Dinner",
    rating: 4.5,
  },
  {
    id: 16,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Cheese and Crackers Platter",
    price: 120,
    desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
    category: "Snacks",
    rating: 4.3,
  },
  {
    id: 17,
    img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
    name: "Crispy Chicken Wings",
    price: 130,
    desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
    category: "Snacks",
    rating: 4.4,
  },
  {
    id: 18,
    img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
    name: "Paneer Tikka Skewers",
    price: 130,
    desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
    category: "Snacks",
    rating: 4.9,
  },
  {
    id: 19,
    img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
    name: "Hummus and Veggie Platter",
    price: 90,
    desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
    category: "Snacks",
    rating: 4.4,
  },
  {
    id: 20,
    img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
    name: "Fruit Skewers",
    price: 70,
    desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
    category: "Snacks",
    rating: 4.8,
  },
];
export default FoodData;
