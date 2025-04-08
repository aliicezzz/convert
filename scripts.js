// Obtendo o valor digitado
const amount = document.getElementById("amount")

// Manipulando o input para receber somente números.
amount.addEventListener("input", () => {
    // Expressão regular que detecta qualquer caractere que não seja um dígito (0-9)
    const hasCharactersRegex = /\D+/g
    // Substitui todos os caracteres não numéricos por uma string vazia, permitindo apenas números no input
    amount.value = amount.value.replace(hasCharactersRegex, "")
})
