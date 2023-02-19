
class Persona {
  // private nome: string  // MODO NORMALE DI DICHIARARE IL COSTRUTTORE
  // private cognome: string
  // constructor (nome, cognome) {
  //   this.nome = nome
  //   this.cognome = cognome
  // }

  constructor (public readonly nome: string, private cognome: string){
  } // MODO CHE USA ANGULAR

  presenta(): void {
    console.log(`Ciao, io sono ${this.nome} ${this.cognome}`);
  }

  saluta(albero: Persona): void {
    console.log(`Salve Maestro ${albero.cognome}, molto piacere`);
  }

  cambiaDati(nome, cognome) {
  this.nome = nome
  this.cognome = cognome;
}
}

let maestro = new Persona('Mario', 'Merola')
let giovane = new Persona('Gigi', 'd\'Alessio')
maestro.presenta()
giovane.saluta(maestro)

maestro.cognome = 'Rossi'
giovane.cambiaDati('Nino', 'Finizio');
console.log(giovane.nome);