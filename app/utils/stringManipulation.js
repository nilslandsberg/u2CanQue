// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const chickenPriceModifiers = (option) => {
  if (option && option.chicken === "Breast +$1.50") {
    return "15.00"
  } else {
    return "13.50"
  }
}

export const chickenWingPriceModifiers = (option) => {
  if (option && ((option.dressing === "Ranch +$0.50") || (option.dressing ==="Blue Cheese +$0.50"))) {
    return "13.00"
  } else if (option && option.dressing === "Extra Sauce (2oz container) +$0.75") {
    return "13.25"
  } else {
    return "12.50"
  }
}

export const sizePriceCalculator = (selection, price) => {
  // Isolate the size from the selection string
  const isolatedSize = selection.split(" ")[0];
  switch (isolatedSize) {
    case "Pint":
      return price.pint;
    case "Quart":
      return price.quart;
    case "Half-Pan":
      return price.halfPan;
    case "Full-Pan":
      return price.fullPan;
    default:
      return 0; // default to 0 is no size is found
  }
  
}