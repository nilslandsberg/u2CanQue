// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const chickenPriceModifiers = (option) => {
  if (option && option.chicken === "Breast +$1.50") {
    console.log("Chicken Breasts!!!")
    return "15.00"
  } else {
    return "13.50"
  }
}

export const chickenWingPriceModifiers = (option) => {
  console.log("Chicken Wing Option: ", option)
  if (option && ((option.dressing === "Ranch +$0.50") || (option.dressing ==="Blue Cheese +$0.50"))) {
    return "13.00"
  } else if (option && option.dressing === "Extra Sauce (2oz container) +$0.75") {
    return "13.25"
  } else {
    return "12.50"
  }
}