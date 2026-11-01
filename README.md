# Parola segreta

Gioco in rete: il server sceglie una parola di cinque lettere, i giocatori provano
a indovinarla.


flavio fulvi 5ci






## API
- POST /partite : comincia una partita. Risposta 201.
- GET /partite/N : stato della partita N. Risposta 200, oppure 404.
- POST /partite/N/tentativi : propone una parola, nel corpo in JSON.
Risposta 201, oppure 400 o 404.

## Messaggi sul canale

- presenti : parte quando qualcuno apre o chiude la pagina. Contiene quanti, il numero delle connessioni aperte.
- tentativo : parte a ogni parola proposta, da chiunque. Contiene nome ed esito.
- vittoria : parte quando una parola viene indovinata. Contiene nome e tentativi.
- ingresso : parte quando un giocatore fa l'accesso. Contiene nome.

## Come avviarlo

Si copia il repository, poi si eseguono gli altri comandi dentro la cartella copiata:

    git clone https://github.com/flaviofulvi/parola-segreta.git
    npm install
    node crea-db.mjs
    node --watch server.mjs
