import http from 'node:http';
const porta = process.env.PORTA;
function rispondi(richiesta, risposta) {
risposta.end('Qui Parola segreta\n');
}
const server = http.createServer(rispondi);
server.listen(porta);
console.log('Server in ascolto sulla porta', porta);