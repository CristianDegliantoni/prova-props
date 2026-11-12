# Esercizio React: le props

Completa `src/App.jsx`: l'array `profiles` è già pronto e
`src/components/ProfileCard.jsx` sa già mostrare un oggetto ricevuto tramite la
prop `item`. Ora crea una card per ogni oggetto dell'array.

## Cosa fare

1. Nel punto indicato dal `TODO`, usa `profiles.map(...)`.
2. Importa `ProfileCard` e, per ogni oggetto, restituisci una `<ProfileCard />`
   passandolo con la prop `item`.
3. Avvia la pagina con `npm run dev` e controlla che le tre card siano diverse.
4. Prova ad aggiungere un oggetto all'array `profiles`.

Suggerimento: dentro `map`, il parametro della callback rappresenta un oggetto
dell'array. React richiede anche una `key` univoca per ogni elemento creato.

Per verificare il progetto usa `npm run build` e `npm run lint`.
