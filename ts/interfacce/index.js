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
var Dispositivo = /** @class */ (function () {
    function Dispositivo(nome, anno) {
        this.nome = nome;
        // this.anno = anno;
    }
    Dispositivo.prototype.accendi = function () { console.log('is ON'); };
    Dispositivo.prototype.spegni = function () { console.log('is OFF'); };
    return Dispositivo;
}());
// const cellulare = new Dispositivo('iPhone', 2017);
console.log(Dispositivo.tipoDispositivo);
