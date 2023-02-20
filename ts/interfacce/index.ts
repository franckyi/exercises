// DIFFERENZA
// interfaccia: implementata dalle classi
// custom type: crea un tipo personalizzato

// private: accessibile solo nella classe dove dichiarata
// protected: accessibile solo nella classe madre e sue istanze
// public: accessibile ovunque

// abstract class: classe usata solo per creare sue istanze
// abstract method(): 
// static: accessibile dalla classe e non da sue istanze
// proprieta static: accessibile solo dalla classe
// static method(): richiamabile solo dalla classe (es. Classe.metodo(), Math.floor() ecc. )

class Dispositivo {
  nome: string
  anno: number
  static tipoDispositivo: 'electronic'

  constructor(nome: string, anno: number) {
  this.nome = nome;
  // this.anno = anno;
  }

  accendi(): void { console.log('is ON'); }
  spegni(): void { console.log('is OFF'); }
}

// const cellulare = new Dispositivo('iPhone', 2017);

console.log(Dispositivo.tipoDispositivo);