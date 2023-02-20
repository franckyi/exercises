// DIFFERENZA
// interfaccia: implementata dalle classi
// custom type: crea un tipo personalizzato

// private: accessibile solo nella classe dove dichiarata
// protected: accessibile solo nella classe madre e sue istanze
// public: accessibile ovunque

// abstract class: usata solo per essere estesa da sue figlie, contiene 1+ metodi/proprieta astratte
// abstract method(): nella classe e' solo dichiarato vuoto, obbligato l'uso in classi figlie
// static: accessibile dalla classe e non da sue istanze
// proprieta static: accessibile solo dalla classe
// static method(): richiamabile solo dalla classe (es. Classe.metodo(), Math.floor() ecc. )
// super(): passa parametri tra classe madre e figlia come anche nel constructor()

abstract class Dispositivo {
  static tipoDispositivo: 'electronic'
  ip: string

  constructor(protected nome:  string, protected anno: number) {
  this.nome = nome; 
  this.anno = anno;
  }

  abstract accendi(): void;
  abstract spegni(): void;
}

interface Internet {
  connettiInternet(): void
}

class Cellulare extends Dispositivo implements Internet {
  ip: string
  constructor(nome: string, anno: number, ip: string) {
    super(nome, anno)
    this.ip = ip
  }

  accendi(): void {
    console.log('il telefono e\' in fase di accensione');
  }

  spegni(): void {
    console.log('il telefono e\' in fase di spegnimento');
  }

  connettiInternet(): void {
    console.log('Il cellulare e\' ora connesso a internet');
  }

}


// const cellulare = new Dispositivo('iPhone', 2017);

console.log(Dispositivo.tipoDispositivo);

// Singleton: impone un solo uso di una classe, es. Presidente, Preside...
// modo per rendere possibile il singleton

class Persona {
  nome: string;
  materia: string;

  constructor(nome: string, materia: string) {
    this.nome = nome;
    this.materia = materia;
  }

  presenta() {
    console.log(`Salve, sono ${this.nome}`);
  }

}

class Preside {
  private static instance: Preside;

  private constructor(private nome: string, private materia: string) {
  }

  static getInstance() {
    if(Preside.instance) return this.instance;
    this.instance = new Preside('Rossi', 'Italiano')
    return this.instance;
  }

  presenta() {
    console.log(`Buongiorno, sono il preside ${this.nome} e insegno ${this.materia}`);
  }

}

Preside.getInstance().presenta()

// class implements multiple interfaces (comma separated)

interface A {
  nome: string
  saluta()
}

interface B {
  eta: number
  mangia()
}

interface C {
  ruolo: string
  presenta()
}

class tizio implements A, B, C {
  nome: string
  eta: number
  ruolo: string

  constructor(nome: string, eta: number, ruolo: string) {
    this.nome = nome
    this.eta = eta
    this.ruolo = ruolo
  }

  saluta(): void {}
  mangia(): void {}
  presenta(): void {}

}