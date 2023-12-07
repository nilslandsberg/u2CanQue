export const appetizerData = [
  {
    name: "Pork Belly Burnt Ends and Rice",
    image: "/images/PorkBellyBurntEnds.jpeg",
    description: "Our succulent, melt-in-your-mouth pork belly is expertly seasoned and perfectly smoked, resulting in a deliciously smoky and tender sensation with every bite. It is served on a bed of fluffy white rice with your choice of sauce.",
    price: "8.50",
    options: ["Mild", "Medium", "Ghost Pepper Glazed"]
  },
  {
    name: "Beef Burnt Ends and Rice",
    image: "/images/BeefBurntEnds.jpeg",
    description: "Indulge in the mouthwatering delight of our Brisket Burnt Ends – a barbecue masterpiece that showcases the caramelized, flavorful edges of slow-cooked brisket cubes.  Served generously over a bed of fluffy white rice, our Brisket Burnt Ends dish offers a delightful symphony of textures and tastes, making it a savory and satisfying addition to your barbecue experience.",
    price: "8.50"
  },
  {
    name: "Ahi Tuna and Rice",
    image: "/images/AhiTuna.jpeg",
    description: "Seared Ahi Tuna, lightly seasoned with Plowboys Fin and Feather rub, topped with a Japanese-style BBQ sauce on a bed of white rice.",
    price: "12.00"
  },
  {
    name: "10 Smoked Jumbo Chicken Wings",
    image: "/images/ChickenWings.jpeg",
    description: "Our signature Smoked Chicken Wings are tender, succulent, and perfectly smoked, resulting in a harmonious balance of smoky goodness and juicy tenderness. Our savory brine, combined with the smoking process, infuses the jumbo wings with rich, smoky essence, creating a mouthwatering experience with every bite. Wings can be finished with your choice of dry rub or sauce.",
    price: "12.50",
    options: {
      sauce: ["Sweet BBQ", "Spicy Apple Habanero", "Asian BBQ", "Hot Squeezed"],
      dressing: ["Ranch", "Blue Cheese", "Extra Sauce (2oz container)"]
    }
  }
]

export const lunchOptions = [
  {
    name: "BBQ Chicken Meal",
    image: "/images/BBQChicken.jpeg",
    description: "To juicy perfection, we brine our free-range chicken, lightly seasoned and smoked. The meal comes with a large leg quarter, 2 thighs or bone-in breast (can be substituted for an additional $1.50), and your choice of two sides.",
    price: "13.50",
    options: ["Chicken Breast +$1.50"]
  },
  {
    name: "Baby Back Ribs - 1/2 Rack",
    image: "/images/1:2RackBabyBack.jpeg",
    description: "A half-rack of our slow smoked BBQ ribs. We take pride in our commitment to excellence, and it shows in the accolades we've received. Our ribs have earned prestigious awards at renowned barbecue competitions around the Country, earning the respect and admiration of judges who have recognized the unmatched quality and flavor we deliver.",
    price: "18.00",
    sauce: ["KC Sweet Sauce", "Spicy Sauce", "Dry Rub Only (naked)", "Smokey"]
  },
  {
    name: "Baby Back Ribs - Full Rack",
    image: "/images/FullRackBabyBack.jpeg",
    description: "A full rack of our slow smoked Baby Back BBQ ribs. We take pride in our commitment to excellence, and it shows in the accolades we've received. When your appetite, now or later on, demands more step on up for the full rack, and no more regrets on not having enough.",
    price: "24.00",
    options: {
      sauce: ["KC Sweet Sauce", "Spicy Sauce", "Dry Rub Only (naked)", "Smokey"]
    }
  },
  {
    name: "Pulled Pork Sandwich",
    image: "/images/PulledPork.jpeg",
    description: "Each bite is a symphony of flavors, as our expertly chosen seasonings and marinades infuse the meat with a harmonious blend of smokiness, sweetness, and tang.",
    price: "13.00",
    options: {
      sauce: ["KC Sweet Sauce", "Spicy Sauce", "Dry Rub Only (naked)"]
    }
    
  },
  {
    name: "BBQ Pork Loin",
    image: "/images/PorkLoin.jpeg",
    description: "Generous slices of tender and juicy pork loin that is brined, lightly seasoned and smoked to perfection.",
    price: "13.50",
    options: {
      sauce: ["Dry Rub", "With Sauce"]
    }
  },
  {
    name: "Smoked Meatloaf",
    image: "/images/Meatloaf.jpeg",
    description: 'A twist on the classic comfort food with our mouthwatering BBQ meatloaf. Savory, subtle heat, and our wonderful, caramelized BBQ sauce topping of this meal that screams that it is "not just Grandmas" meatloaf.',
    price: "13.50"
  },
  {
    name: "Brisket",
    image: "/images/Brisket.jpeg",
    description: "Smoked to juicy perfection, your tastebuds will love the moist and tender texture inside a caramelized exterior seasoned the Texas way, SPG. Grab a couple of sides to complete your lunch.",
    price: "18.50"
  },
  {
    name: "Woodfired Lasagna",
    image: "/images/Lasagna.jpeg",
    description: "Savor the irresistible layers of our Smoked Lasagna. Tender pasta sheets embrace a delightful blend of smoked meats, infused with the rich flavors of fire-roasted tomatoes, grilled bell peppers, and caramelized onions. Our unique touch extends to the smoked provolone, mozzarella, and even freshly shaved parmesan. Slow-cooked to perfection, this hearty dish will leave you craving more, setting it apart from the rest.",
    price: "18.00",
    options: {
      bread: ["Texas Garlic Toast", "Garlic Parmesan French Bread", "Roll"]
    }
  },
  {
    name: "Texas Bold (and beanless) Chili",
    image: "/images/Chili.jpeg",
    description: "Experience the award-winning bold and smoky flavors of our Smoked Texas Chili. Tender smoked beef brisket combines with aromatic spices and fire-roasted tomatoes for a mouthwatering blend of taste. Served over a bed of rice that absorbs the complexity of flavors, it's a hearty and satisfying dish that will tantalize your taste buds.",
    price: "12.50",
    options: {
      toppings: ["Sour Cream", "Fresh Diced White Onion", "Shredded Smoked Cheddar Cheese"]
    }
  }
]

export const bulkBbq = [
  {
    name: "Pulled Pork",
    image: "/images/PulledPork.jpeg",
    description: "Tender and juicy pulled pork.  Perfect for making sandwiches, nachos, or simply eating with your fingers.",
    price: "11.50"
  },
  {
    name: "Beef Brisket",
    image: "/images/Brisket.jpeg",
    description: "Our brisket slices (or KC Burnt Ends) are meant to share more than the meat; it brings out the language of BBQ: LOVE.",
    price: "18.50"
  }
]

export const sides = [
  {
    name: "Smoked Mac-n-Cheese",
    image: "/images/MacNCheese.jpeg",
    description: "Indulge in our irresistible smoked mac and cheese, where creamy macaroni meets a tantalizing smoky flavor. With a perfect balance of rich, gooey cheese and a subtle, lingering smokiness, it's a comforting classic elevated to new heights.",
    price: {
      pint: "13",
      quart: "22",
      halfPan: "45",
      fullPan: "75"
    }
  },
  {
    name: "Smoked Cowboy Beans",
    image: "/images/CowboyBeans.jpeg",
    description: "Savor the smoky essence of our slow-smoked cowboy beans, pork belly, brown sugar, and spices, then into the smoker for 3 hours, contributing to this mouthwatering experience. Perfect as a side or standalone comfort food.",
    price: {
      pint: "10",
      quart: "18",
      halfPan: "35",
      fullPan: "60"
    }
  }
]