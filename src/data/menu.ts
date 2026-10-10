export type MenuCategory = 'breakfast' | 'lunch' | 'platters' | 'coffee' | 'drinks' | 'sweets';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description?: string;
  tags?: string[];
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items', icon: '🍽️' },
  { id: 'breakfast', label: 'All-Day Breakfast & Brunch', icon: '🥞' },
  { id: 'lunch', label: 'Riverside Lunch', icon: '🥪' },
  { id: 'platters', label: 'Grazing & Platters', icon: '🧀' },
  { id: 'coffee', label: 'Artisan Coffee & Tea', icon: '☕' },
  { id: 'drinks', label: 'Cold Drinks & Local Wines', icon: '🍷' },
  { id: 'sweets', label: 'Housemade Sweets', icon: '🍰' },
] as const;

export const MENU_TAGS = ['All', 'Popular', 'Chef Specialty', 'Vegetarian', 'Gluten Free', 'Local Produce'] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast & Brunch
  {
    id: "br1",
    name: "The PreVue Riverside Big Breakfast",
    price: 26.50,
    category: "breakfast",
    description: "Two free-range eggs cooked your way, thick-cut smoked bacon, pork & fennel sausage, grilled field mushrooms, roasted truss tomatoes, golden hash brown & toasted artisan sourdough.",
    tags: ["Popular", "Chef Specialty"],
    popular: true
  },
  {
    id: "br2",
    name: "Smashed Avocado & Meredith Goat's Feta",
    price: 22.50,
    category: "breakfast",
    description: "Fresh seasoned avocado on toasted sourdough, crumbled Meredith dairy goat's feta, cherry heirloom tomatoes, house dukkah, pickled shallots & two poached free-range eggs.",
    tags: ["Popular", "Vegetarian", "Local Produce"],
    popular: true
  },
  {
    id: "br3",
    name: "Eggs Benedict on Toasted Brioche",
    price: 23.50,
    category: "breakfast",
    description: "Poached eggs on warm buttered brioche with baby spinach and rich velvety house hollandaise. Choose slow-braised pulled pork, double-smoked ham, or Tasmanian smoked salmon (+$3).",
    tags: ["Popular", "Chef Specialty"],
    popular: true
  },
  {
    id: "br4",
    name: "Ricotta Hotcakes with Berries & Maple",
    price: 21.50,
    category: "breakfast",
    description: "Fluffy housemade ricotta hotcakes topped with seasonal macerated berries, whipped vanilla mascarpone, toasted pistachios, and pure Canadian maple syrup.",
    tags: ["Popular", "Vegetarian"],
    popular: true
  },
  {
    id: "br5",
    name: "Truffled Forest Mushrooms on Toast",
    price: 22.00,
    category: "breakfast",
    description: "Pan-seared medley of Swiss brown, oyster, and button mushrooms in thyme and truffle butter, served over sourdough with shaved pecorino and poached egg.",
    tags: ["Vegetarian", "Chef Specialty"]
  },
  {
    id: "br6",
    name: "Chilli Scrambled Eggs",
    price: 21.00,
    category: "breakfast",
    description: "Creamy free-range scrambled eggs tossed with fresh red chilli, spring onion, coriander, and crispy shallots over toasted sourdough with house chilli jam.",
    tags: ["Popular", "Vegetarian"],
    popular: true
  },
  {
    id: "br7",
    name: "House Baked Granola Bowl",
    price: 16.50,
    category: "breakfast",
    description: "Toasted maple oats, High Country honey, pumpkin seeds, toasted almonds, Greek yoghurt, and seasonal poached rhubarb compote.",
    tags: ["Vegetarian", "Gluten Free"]
  },
  {
    id: "br8",
    name: "Classic Eggs Your Way on Sourdough",
    price: 14.50,
    category: "breakfast",
    description: "Two free-range eggs (poached, fried, or scrambled) on thick-cut toasted bakery sourdough with High Country butter.",
    tags: ["Vegetarian"]
  },

  // Gourmet Riverside Lunch
  {
    id: "lu1",
    name: "The PreVue Signature Wagyu Burger",
    price: 25.50,
    category: "lunch",
    description: "200g premium Victorian Wagyu patty, melted aged cheddar, smoked bacon, caramelized onion jam, butter lettuce, tomato, house aioli on a toasted milk bun with hand-cut rosemary salted chips.",
    tags: ["Popular", "Chef Specialty"],
    popular: true
  },
  {
    id: "lu2",
    name: "Crispy Skin Ovens River Salmon Fillet",
    price: 32.00,
    category: "lunch",
    description: "Pan-roasted crispy skin salmon on a bed of warm crushed chats, tender asparagus spears, citrus fennel salad, and a silky lemon dill velouté.",
    tags: ["Gluten Free", "Chef Specialty"],
    popular: true
  },
  {
    id: "lu3",
    name: "Slow-Braised Pulled Lamb Flatbread",
    price: 24.50,
    category: "lunch",
    description: "12-hour High Country lamb shoulder served on warm grilled flatbread with house cucumber tzatziki, pomegranate seeds, pickled red onions, fresh mint, and crumbled feta.",
    tags: ["Popular", "Local Produce"],
    popular: true
  },
  {
    id: "lu4",
    name: "Herb Crumbed Free-Range Chicken Schnitzel",
    price: 24.00,
    category: "lunch",
    description: "Panko & herb crumbed chicken breast served with crisp garden salad, hand-cut chips, and choice of mushroom sauce or garlic butter.",
    tags: ["Popular"]
  },
  {
    id: "lu5",
    name: "Salt & Szechuan Pepper Calamari",
    price: 23.50,
    category: "lunch",
    description: "Tender flash-fried calamari tossed with fresh chilli and spring onion, served with wild rocket, shaved fennel, lime wedge, and house roasted garlic aioli.",
    tags: ["Popular", "Gluten Free"]
  },
  {
    id: "lu6",
    name: "Riverside Green Harvest Nourish Bowl",
    price: 21.50,
    category: "lunch",
    description: "Organic tricolor quinoa, roasted butternut pumpkin, avocado, charred broccolini, edamame, pickled cabbage, toasted sunflower seeds, and green goddess tahini dressing.",
    tags: ["Vegetarian", "Gluten Free"]
  },
  {
    id: "lu7",
    name: "Gourmet Steak Sandwich",
    price: 26.00,
    category: "lunch",
    description: "Tender grilled grain-fed Scotch fillet on toasted ciabatta with beetroot relish, rocket, Swiss cheese, caramelized onions, and seeded Dijon mustard mayonnaise.",
    tags: ["Popular"]
  },
  {
    id: "lu8",
    name: "Hand-Cut Chips with Rosemary Salt & Aioli",
    price: 9.50,
    category: "lunch",
    description: "Crispy golden thick-cut chips seasoned with aromatic rosemary sea salt and served with house garlic aioli.",
    tags: ["Vegetarian", "Gluten Free"]
  },

  // Grazing & Share Platters
  {
    id: "pl1",
    name: "King Valley & Ovens Grazing Platter (For 2–3)",
    price: 42.00,
    category: "platters",
    description: "Selection of Milawa cheeses, prosciutto crudo, sopressa salami, house beetroot relish, marinated High Country olives, fresh seasonal fruit, roasted nuts, artisan water crackers & warm baguette.",
    tags: ["Popular", "Chef Specialty", "Local Produce"],
    popular: true
  },
  {
    id: "pl2",
    name: "Riverside Seafood Tasting Board",
    price: 48.00,
    category: "platters",
    description: "Lemon pepper dusted calamari, smoked ocean trout rillette, grilled garlic king prawns, pickled octopus salad, tartare, fresh lemon cheeks, and grilled focaccia.",
    tags: ["Chef Specialty"]
  },
  {
    id: "pl3",
    name: "Artisan Vegetarian Mezze Board",
    price: 36.00,
    category: "platters",
    description: "Roasted garlic hummus, Meredith goat's feta, grilled zucchini ribbons, marinated artichoke hearts, falafel bites, stuffed vine leaves, and warm Turkish flatbread.",
    tags: ["Vegetarian", "Local Produce"]
  },

  // Artisan Coffee & Specialty Tea
  {
    id: "co1",
    name: "Barista Specialty Coffee (Flat White / Latte / Cappuccino)",
    price: 4.80,
    category: "coffee",
    description: "Crafted with locally roasted specialty espresso beans and silky steamed milk. Full cream, skim, oat, almond, or soy milk available.",
    tags: ["Popular"],
    popular: true
  },
  {
    id: "co2",
    name: "Single Origin Long Black / Espresso",
    price: 4.50,
    category: "coffee",
    description: "Rotating single origin roast with delicate bright notes and floral acidity.",
    tags: ["Local Produce"]
  },
  {
    id: "co3",
    name: "Ovens River Cold Brew",
    price: 6.00,
    category: "coffee",
    description: "Slow steeped for 18 hours in cold filtered water, served chilled over ice with an orange slice.",
    tags: ["Popular", "Chef Specialty"],
    popular: true
  },
  {
    id: "co4",
    name: "Prana Wet Sticky Chai Latte",
    price: 5.80,
    category: "coffee",
    description: "Whole spice sticky chai brewed with fresh High Country honey and warm velvety milk of your choice.",
    tags: ["Popular"]
  },
  {
    id: "co5",
    name: "Organic Loose Leaf Teas",
    price: 4.80,
    category: "coffee",
    description: "English Breakfast, Earl Grey, Sencha Green, Peppermint, Chamomile, or Lemongrass & Ginger brewed in a ceramic pot.",
    tags: ["Vegetarian"]
  },
  {
    id: "co6",
    name: "Decadent Belgian Hot Chocolate",
    price: 5.50,
    category: "coffee",
    description: "Melted pure Belgian dark chocolate pearls whisked with steamed milk and topped with toasted marshmallows.",
    tags: ["Popular"]
  },

  // Cold Drinks & Regional Wines
  {
    id: "dr1",
    name: "Fresh Pressed High Country Juices",
    price: 8.50,
    category: "drinks",
    description: "Choice of: Orange Sunrise (Orange, carrot, ginger) or River Breeze (Green apple, cucumber, celery, mint, lime).",
    tags: ["Gluten Free", "Local Produce"]
  },
  {
    id: "dr2",
    name: "Riverside Berry Smoothie",
    price: 9.50,
    category: "drinks",
    description: "Blended mixed High Country berries, banana, Greek honey yoghurt, chia seeds, and almond milk.",
    tags: ["Vegetarian"]
  },
  {
    id: "dr3",
    name: "King Valley Prosecco (Glass / Bottle)",
    price: 12.00,
    category: "drinks",
    description: "Crisp, vibrant sparkling wine from Victoria's nearby King Valley region. Refreshing notes of green apple and citrus blossom.",
    tags: ["Popular", "Local Produce"],
    popular: true
  },
  {
    id: "dr4",
    name: "High Country Pinot Grigio (Glass)",
    price: 11.50,
    category: "drinks",
    description: "Dry, elegant white wine crafted in the Ovens and King Valley wine region.",
    tags: ["Local Produce"]
  },
  {
    id: "dr5",
    name: "Rutherglen Durif / Shiraz (Glass)",
    price: 13.00,
    category: "drinks",
    description: "Rich, full-bodied red wine with blackberry compote notes and subtle French oak spice.",
    tags: ["Local Produce"]
  },
  {
    id: "dr6",
    name: "Bridge Road Brewers Craft Beer",
    price: 10.00,
    category: "drinks",
    description: "Locally brewed Beechworth Pale Ale or Celtic Red Ale on tap and bottle.",
    tags: ["Local Produce"]
  },

  // Housemade Sweets & Pastries
  {
    id: "sw1",
    name: "High Country Devonshire Tea & Scones",
    price: 12.50,
    category: "sweets",
    description: "Two freshly baked fluffy buttermilk scones served warm with house strawberry conserve and double clotted cream.",
    tags: ["Popular", "Vegetarian"],
    popular: true
  },
  {
    id: "sw2",
    name: "Housemade Tangy Lemon Curd Tart",
    price: 9.50,
    category: "sweets",
    description: "Crisp sweet pastry crust filled with zesty local Meyer lemon curd and torched Italian meringue.",
    tags: ["Chef Specialty", "Vegetarian"]
  },
  {
    id: "sw3",
    name: "Flourless Belgian Chocolate & Walnut Torte",
    price: 10.50,
    category: "sweets",
    description: "Decadent rich dark chocolate torte served warm with vanilla bean gelato and raspberry coulis.",
    tags: ["Gluten Free", "Popular"],
    popular: true
  },
  {
    id: "sw4",
    name: "Wild Berry & Pistachio Friand",
    price: 6.50,
    category: "sweets",
    description: "Delicate gluten-free almond and berry cake baked fresh daily in our kitchen.",
    tags: ["Gluten Free", "Vegetarian"]
  }
];
