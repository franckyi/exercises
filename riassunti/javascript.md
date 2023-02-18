# JavaScript

- scripting language, cioè un linguaggio usato per manipolare o automatizzare sistemi già esistenti
- in genere interpretato runtime, oggi è compilato JIT
- è usato per aggiungere interattività su siti e app
- è dynamic type checking (o weakly typed), cioè i tipi di dato non sono dichiarati
- usa un modello a oggetti basato su prototipi, i quali forniscono un inheritance dinamico
- ha funzioni first-class
- multi-paradigma, supporta molti stili di programmazione (object-oriented, functional, event-driven, procedural ecc.)

## Come commentare il codice

// su singolo rigo

/* su più\
    righi */

## Scrict mode

ECMAScript 5 (ES5) del 2009 aggiunse nuove funzionalità al linguaggio e ne ha modificate alcune già esistenti.\
Per far si che il vecchio codice continui a funzionare, molte modifiche vengono disattivate di default.\ 
"use strict"; direttiva che permette di abilitarle.\
In strict mode il codice viene eseguito secondo gli standard moderni.

## Modulo

- non è altro che un file JavaScript, quindi uno script ma utilizza funzionalità e parole chiave speciali
- `<script type="module">` comunica al browser che lo script va trattato come modulo
- consente l'uso di direttive export e import per rendere utilizzabili variabili e funzionionalità all'esterno del file:\
`export function nome() {}, quindi import {nome} from '/path'`\
    oppure\
    `const nome = () {}`\
    `export default nome;`\
    `import nome from '/path;`
- un modulo funziona sempre in strict mode e defer automaticamente
- un modulo accetta sempre il parametro async (sia per script inline sia script esterni linkati)
    - più moduli esterni con lo stesso src vengono eseguiti solo una volta
    - moduli importati da fonti esterne hanno bisogno di intestazioni CORS, cioè il server esterno deve fornirci un header Access-Control-Allow-Origin, dandoci il permesso di recuperare lo script
- ogni `<script type="module"></script>` ha un suo scope nel file HTML
- con `window.nomeVariabile = 'esempio'` possiamo creare una variabile globale, vista da tutti gli script anche senza type="module", ma è una cattiva pratica
- un'azione contenuta in un modulo es. un alert() viene eseguito solo una volta, per azioni ripetute è meglio usare `export nomeFunzione()`
- è buona pratica usare il primo import per inizializzazioni e strutture dati
- la stessa variabile o oggetto importato da più file js, aggiornato in uno dei file, sarà aggiornato e visto da tutti i file che lo importano
- l'oggetto import.meta restituisce informazioni sul modulo corrente
- in un modulo il this a livello maggiore è undefined, e non window
- un modulo senza percorso viene definito modulo bare, ma nel browser non è ancora supportato
- i vecchi browser non supportano il `type="module"`, quindi usiamo `<script nomodule>` come fallback, a sua volta ignorato dal browser moderno

## Closure
- funzione figlia che ha accesso alle variabili locali della funzione genitore
