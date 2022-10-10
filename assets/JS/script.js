const nameUtent = prompt('Inserisci il tuo nome');
const surnameUtent = prompt('Inserisci il tuo cognome');
const favColorUtent = prompt('Inserisci il tuo colore preferito');
let output;

output = `
<strong class="color-output">
${nameUtent}${surnameUtent}${favColorUtent}22
</strong>
`
console.log(output);

document.getElementById('nameUtent').innerHTML += nameUtent;
document.getElementById('surnameUtent').innerHTML += surnameUtent;
document.getElementById('favColorUtent').innerHTML += favColorUtent;
document.getElementById('pswUtent').innerHTML += output;