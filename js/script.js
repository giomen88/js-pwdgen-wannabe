const password = document.getElementById('password');

const firstName = prompt('Qual è il tuo nome?');

const lastName = prompt('Qual è il tuo cognome?');

const favColor = prompt('Qual è il tuo colore preferito?');

password.innerText = `La tua password è: ${firstName}${lastName}${favColor}88`;