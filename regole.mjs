export function controlla(parola) {
if (typeof parola !== 'string') {
return 'Manca la parola';
}
if (parola.length !== 5) {
return 'La parola deve avere cinque lettere';
}
for (let i = 0; i < 5; i++) {
if (parola[i] < 'a' || parola[i] > 'z') {
return 'Sono ammesse solo le lettere minuscole dalla a alla z';
}
}
return '';
}