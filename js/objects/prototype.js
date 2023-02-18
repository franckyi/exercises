function crescita(mesi){
    return(mesi);
}

function Fiore(stagione,colore,tipologia){

this.fioreColore = colore;
this.fioreStagione = stagione;
this.fioreCaratteristica = tipologia;
}

function anotherFunc() {
return 2*3;
}

Fiore.prototype.anotherFunc = anotherFunc;


Fiore.prototype.crescita = crescita;
let rosa = new Fiore('primavera' , 'rossa' , 'rosa senza spine');

console.log(rosa.crescita('3'));
console.log(rosa.anotherFunc());

console.log('La rosa cresce in ' + ' ' + rosa.crescita('3') + ' ' + 'mesi');