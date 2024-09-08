import { isLuhnNumber } from "./is-luhn-number";

const cards = {
  amex: /^3[47][0-9]{13}$/,
  dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  mastercard:
    /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
  unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
  visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/,
};

type CreditCardType = keyof typeof cards;

const allCards: CreditCardType[] = [
  "amex",
  "dinersclub",
  "discover",
  "jcb",
  "mastercard",
  "unionpay",
  "visa",
];

const isCreditCard = (input: any, provider?: CreditCardType) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Remove all dashes and spaces
  input = input.replace(/[- ]+/g, "");

  // Check card format
  if (provider) {
    const cardRegex = cards[provider];

    // If provider does not exist
    if (!cardRegex) return false;

    // If card number is not valid format
    if (!cardRegex.test(input)) return false;
  } else {
    // If card number is not match any card regex
    if (allCards.every((cardProvider) => !cards[cardProvider].test(input)))
      return false;
  }

  return isLuhnNumber(input);
};

export { isCreditCard, CreditCardType };
