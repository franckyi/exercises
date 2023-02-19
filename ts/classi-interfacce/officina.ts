interface Motore {
  aumentaPotenza(): number;
  riduciPotenza(): number;
}

interface Macchina {
  accelera()
}

class Fiat500 implements Macchina {
  private velocita = 0;
  
  constructor (private motore: Motore) {
  }

  accelera() {
    this.velocita = this.motore.aumentaPotenza();
    return this.velocita;
  }

}

class Motore1200 implements Motore {
  aumentaPotenza(): number {
    return 50;
  }
  riduciPotenza(): number {
    return -50;
  }
}

class Motore1800 implements Motore {
  aumentaPotenza(): number {
    return 90;
  }
  riduciPotenza(): number {
    return -50;
  }
}

class Officina {
  macchine: Macchina[] = [];

  constructor () {
    this.macchine.push(new Fiat500(new Motore1200))
    this.macchine.push(new Fiat500(new Motore1800))
  }

  testaMacchine() {
    for (let m of this.macchine) {
      console.log(m.accelera());
    }
  }

}

let officina = new Officina ();

officina.testaMacchine();
