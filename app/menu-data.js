export const appetizerData = [
  {
    id: "EBS5QN0E17S6A",
    name: "Pork Belly Burnt Ends and Rice",
    image: "/images/PorkBellyBurntEnds.jpeg",
    description: "Our succulent, melt-in-your-mouth pork belly is expertly seasoned and perfectly smoked, resulting in a deliciously smoky and tender sensation with every bite. It is served on a bed of fluffy white rice with your choice of sauce.",
    price: "8.50",
    options: {
      sauce: ["Mild", "Medium", "Ghost Pepper Glazed"]
    }
  },
  {
    id: "YST7QH1466SHM",
    name: "Beef Burnt Ends and Rice",
    image: "/images/BeefBurntEnds.jpeg",
    description: "Indulge in the mouthwatering delight of our Brisket Burnt Ends – a barbecue masterpiece that showcases the caramelized, flavorful edges of slow-cooked brisket cubes.  Served generously over a bed of fluffy white rice, our Brisket Burnt Ends dish offers a delightful symphony of textures and tastes, making it a savory and satisfying addition to your barbecue experience.",
    price: "8.50"
  },
  {
    id: "HP32836NJ7RDJ",
    name: "Ahi Tuna and Rice",
    image: "/images/AhiTuna.jpeg",
    description: "Seared Ahi Tuna, lightly seasoned with Plowboys Fin and Feather rub, topped with a Japanese-style BBQ sauce on a bed of white rice.",
    price: "12.00"
  },
  {
    id: "9N24KDRSTQJXW",
    name: "10 Smoked Jumbo Chicken Wings",
    image: "/images/ChickenWings.jpeg",
    description: "Our signature Smoked Chicken Wings are tender, succulent, and perfectly smoked, resulting in a harmonious balance of smoky goodness and juicy tenderness. Our savory brine, combined with the smoking process, infuses the jumbo wings with rich, smoky essence, creating a mouthwatering experience with every bite. Wings can be finished with your choice of dry rub or sauce.",
    price: "12.50",
    options: {
      sauce: ["Sweet BBQ", "Spicy Apple Habanero", "Asian BBQ", "Hot Squeezed"],
      dressing: ["Ranch +$0.50", "Blue Cheese +$0.50", "Extra Sauce (2oz container) +$0.75", "No Dressing"]
    }
  }
]

const chickenPlate = {
  id: "3T9ZFQ0A6WX2W",
  twoSides: true,
  name: "BBQ Chicken Meal",
  image: "/images/BBQChicken.jpeg",
  description: "To juicy perfection, we brine our free-range chicken, lightly seasoned and smoked. The meal comes with a large leg quarter, thighs or bone-in breast (can be substituted for an additional $1.50), and your choice of two sides.",
  price: "13.50",
  options: {
    chicken: ["Thighs", "Breast +$1.50"]
  }
}

const texasChili = {
  id: "GNYFEFD9J3WV6",
  oneSide: true,
  bread: true,
  name: "Texas Bold (and beanless) Chili",
  image: "/images/Chili.jpeg",
  description: "Experience the award-winning bold and smoky flavors of our Smoked Texas Chili. Tender smoked beef brisket combines with aromatic spices and fire-roasted tomatoes for a mouthwatering blend of taste. Served over a bed of rice that absorbs the complexity of flavors, it's a hearty and satisfying dish that will tantalize your taste buds.",
  price: "12.50",
  options: {
    toppings: ["Sour Cream", "Diced White Onion", "Shredded Smoked Cheddar Cheese", "Sour Cream & Diced White Onions", "Sour Cream & Smoked Cheddar Cheese", "Diced White Onions & Smoked Cheddar Cheese", "THE WORKS!"]
  }
}

const pulledPorkSandwich = {
  id: "ND919VXE4T4A0",
  twoSides: true,
  name: "Pulled Pork Sandwich",
  image: "/images/PulledPork.jpeg",
  description: "Each bite is a symphony of flavors, as our expertly chosen seasonings and marinades infuse the meat with a harmonious blend of smokiness, sweetness, and tang.",
  price: "13.00",
  options: {
    sauce: ["KC Sweet Sauce", "Spicy Sauce", "Dry Rub Only (naked)"]
  }
}

export const mondayLunch = [
  chickenPlate,
  {
    id: "7DYEWW3SQWJHC",
    twoSides: true,
    name: "BBQ Pork Loin",
    image: "/images/PorkLoin.jpeg",
    description: "Generous slices of tender and juicy pork loin that is brined, lightly seasoned and smoked to perfection.",
    price: "13.50",
    options: {
      sauce: ["Dry Rub", "With Sauce"]
    }
  },
  {
    id: "7DYEWW3SQWJHC",
    twoSides: true,
    name: "BBQ Pork Steak",
    image: "/images/porkSteak.jpeg",
    description: "Meticulously seasoned and slow-cooked to tender perfection. Infused with the rich, smoky flavors of the South, this delectable dish pays homage to our traditional barbecue techniques. Each succulent cut is glazed with our BBQ sauce, boasting a harmonious blend of sweet molasses, tangy vinegar, and a hint of heat. Savor the taste of the South with every juicy bite of our BBQ pork steak.",
    price: "13.50",
  },
  texasChili
]

export const tuesdayLunch = [
  chickenPlate,
  {
    id: "00K9SY4DCH73T",
    twoSides: true,
    name: "Baby Back Ribs - 1/2 Rack",
    image: "/images/1:2RackBabyBack.jpeg",
    description: "A half-rack of our slow smoked BBQ ribs. We take pride in our commitment to excellence, and it shows in the accolades we've received. Our ribs have earned prestigious awards at renowned barbecue competitions around the Country, earning the respect and admiration of judges who have recognized the unmatched quality and flavor we deliver.",
    price: "18.00",
    options: {
      sauce: ["KC Sweet Sauce", "Spicy Sauce", "Dry Rub Only (naked)", "Smokey"]
    }
  },
  {
    id: "EWE3WY8QJGTGC",
    twoSides: true,
    name: "Baby Back Ribs - Full Rack",
    image: "/images/FullRackBabyBack.jpeg",
    description: "A full rack of our slow smoked Baby Back BBQ ribs. We take pride in our commitment to excellence, and it shows in the accolades we've received. When your appetite, now or later on, demands more step on up for the full rack, and no more regrets on not having enough.",
    price: "24.00",
    options: {
      sauce: ["KC Sweet Sauce", "Spicy Sauce", "Dry Rub Only (naked)", "Smokey"]
    }
  },
  texasChili
]

export const wednesdayLunch = [
  chickenPlate,
  {
    id: "G0SXBYAVDS670",
    oneSide: true,
    bread: true,
    name: "Smoked Meatloaf",
    image: "/images/Meatloaf.jpeg",
    description: 'A twist on the classic comfort food with our mouthwatering BBQ meatloaf. Savory, subtle heat, and our wonderful, caramelized BBQ sauce topping of this meal that screams that it is "not just Grandmas" meatloaf.',
    price: "13.50"
  },
  pulledPorkSandwich,
  texasChili
]

export const thursdayLunch = [
  chickenPlate,
  pulledPorkSandwich,
  {
    id: "",
    twoSides: true,
    name: "Pulled Chicken Sandwich",
    image: "/images/pulledChickenSandwich.jpeg",
    description: "Experience the perfect harmony of smokiness, sweetness, and tang in our pulled chicken sandwich. Our expertly chosen seasonings and marinades infuse every bite with a symphony of flavors, making each mouthful a delightful journey for your taste buds.",
    price: "13.00",
    options: {
      sauce: ["KC Sweet Sauce", "Spicy Sauce", "Dry Rub Only (naked)"]
    }
  },
  texasChili
]

export const fridayLunch = [
  chickenPlate,
  {
    id: "BYGXQY9PVMVV6",
    twoSides: true,
    bread: true,
    name: "Brisket Plate",
    image: "/images/Brisket.jpeg",
    description: "Smoked to juicy perfection, your tastebuds will love the moist and tender texture inside a caramelized exterior seasoned the Texas way, SPG. Grab a couple of sides to complete your lunch.",
    price: "18.50"
  },
  {
    id: "KX50TKZNATXCP",
    oneSide: true,
    bread: true,
    name: "Woodfired Lasagna",
    image: "/images/Lasagna.jpeg",
    description: "Savor the irresistible layers of our Smoked Lasagna. Tender pasta sheets embrace a delightful blend of smoked meats, infused with the rich flavors of fire-roasted tomatoes, grilled bell peppers, and caramelized onions. Our unique touch extends to the smoked provolone, mozzarella, and even freshly shaved parmesan. Slow-cooked to perfection, this hearty dish will leave you craving more, setting it apart from the rest.",
    price: "18.00",
  },
  texasChili
]

export const bulkBbq = [
  {
    bulk: true,
    id: "9CG7CP2YC44MJ",
    name: "Pulled Pork",
    image: "/images/PulledPork.jpeg",
    description: "Tender and juicy pulled pork.  Perfect for making sandwiches, nachos, or simply eating with your fingers.",
    pricePerPound: "11.50",
    price: {
      onePound: "11.50",
      threePounds: "34.50",
      fivePounds: "57.50"
    },
    size: ["1lb (serves 3-4): $11.50", "3lbs (serves 9-12): $34.50", "5lbs (serves 15-20): $57.50"]
  },
  {
    bulk: true,
    id: "JV8G84RMS5YFJ",
    name: "Beef Brisket",
    image: "/images/Brisket.jpeg",
    description: "Our brisket slices (or KC Burnt Ends) are meant to share more than the meat; it brings out the language of BBQ: LOVE.",
    pricePerPound: "21.50",
    price: {
      onePound: "21.50",
      threePounds: "55.50",
      fivePounds: "107.50"
    },
    size: ["1lb (serves 3-4): $21.50", "3lbs (serves 9-12): $55.50", "5lbs (serves 15-20): $107.50"]
  }
]

export const sides = [
  {
    side: true,
    name: "Smoked Mac-n-Cheese",
    image: "/images/MacNCheese.jpeg",
    description: "Indulge in our irresistible smoked mac and cheese, where creamy macaroni meets a tantalizing smoky flavor. With a perfect balance of rich, gooey cheese and a subtle, lingering smokiness, it's a comforting classic elevated to new heights.",
    price: {
      pint: "13",
      quart: "22",
      halfPan: "45",
      fullPan: "75"
    },
    size: ["Pint (Serves 2-3): $13.00", "Quart (Serves 4-6): $22.00", "Half-Pan (Serves 12-14): $45.00", "Full-Pan (Serves 24-28): $75.00"]
  },
  {
    side: true,
    name: "Smoked Cowboy Beans",
    image: "/images/CowboyBeans.jpeg",
    description: "Savor the smoky essence of our slow-smoked cowboy beans, pork belly, brown sugar, and spices, then into the smoker for 3 hours, contributing to this mouthwatering experience. Perfect as a side or standalone comfort food.",
    price: {
      pint: "10",
      quart: "18",
      halfPan: "35",
      fullPan: "60"
    },
    size: ["Pint (Serves 2-3): $10.00", "Quart (Serves 4-6): $18.00", "Half-Pan (Serves 12-14): $35.00", "Full-Pan (Serves 24-28): $60.00"]
  },
  {
    side: true,
    image: "/images/GreenBeans.jpeg",
    description: "Tender and seasoned, these perfectly smoked beans add a delightful twist to your barbecue spread. Their crispy texture and smoky flavor make for a mouthwatering side dish that perfectly complements any meal. Smoked pork belly and toasted fennel take these beans above and beyond your expectations.",
    price: {
      pint: "8",
      quart: "14",
      halfPan: "26",
      fullPan: "40"
    },
    size: ["Pint (Serves 2-3): $8.00", "Quart (Serves 4-6): $14.00", "Half-Pan (Serves 12-14): $26.00", "Full-Pan (Serves 24-28): $40.00"]
  },
  {
    side: true,
    name: "Street Corn",
    image: "/images/StreetCorn.jpeg",
    description: "Tender and seasoned, these perfectly smoked beans add a delightful twist to your barbecue spread. Their crispy texture and smoky flavor make for a mouthwatering side dish that perfectly complements any meal. Smoked pork belly and toasted fennel take these beans above and beyond your expectations.",
    price: {
      pint: "8",
      quart: "15",
      halfPan: "25",
      fullPan: "40"
    },
    size: ["Pint (Serves 2-3): $8.00", "Quart (Serves 4-6): $15.00", "Half-Pan (Serves 12-14): $25.00", "Full-Pan (Serves 24-28): $40.00"]
  },
]

export const modifiers = {
  sides: ["Smoked Mac-N-Cheese", "Greek Pasta Salad", "Creamy Sweet Southern Pasta Salad", "Smoked Cowboy Beans", "Smoked Green Beans", "Street Corn"],
  bread: ["Texas Toast", "No Bread"],
}

export const christmasItems = [
  {
    name: "Smoked Prime Rib"
  },
  {
    name: "Double Smoked Ham"
  },
  {
    name: "Smoked Turkey"
  }
]

export const thanksgivingItems = [
  {
    name: "Smoked Turkey"
  },
  {
    name: "Double Smoked Ham"
  }
]

export const easterItems = [
  {
    name: "Double Smoked Ham"
  }
]