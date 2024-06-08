// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
  return str.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
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
    case "Default":
      return price.default;
    case "Pint":
      return price.pint;
    case "Quart":
      return price.quart;
    case "Half-Pan":
      return price.halfPan;
    case "Full-Pan":
      return price.fullPan;
    case "1lb":
      return price.onePound;
    case "3lbs":
      return price.threePounds;
    case "4lbs":
      return price.fourPounds;
    case "5lbs":
      return price.fivePounds;
    case "6lbs":
      return price.sixPounds;
    case "7lbs":
      return price.sevenPounds;
    case "8lbs":
      return price.eightPounds;
    case "9lbs":
      return price.ninePounds;
    case "10lbs":
      return price.tenPounds;
    default:
      return 0; // default to 0 is no size is found
  }
}
