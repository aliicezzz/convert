const USD = 5.83
const EUR = 6.38
const GBP = 7.48

// Obtendo o valor digitado
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
// Manipulando o input para receber somente números.
amount.addEventListener("input", () => {
  // Expressão regular que detecta qualquer caractere que não seja um dígito (0-9)
  const hasCharactersRegex = /\D+/g;
  // Substitui todos os caracteres não numéricos por uma string vazia, permitindo apenas números no input
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
};

function convertCurrency(amount, price, symbol) { }
