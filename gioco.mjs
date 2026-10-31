const segreta = 'parco';
const tentativo = process.argv[2];
if (tentativo === segreta) {
console.log('Indovinata');
} else {
console.log('Non è questa');
}