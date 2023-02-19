var Fiat500 = /** @class */ (function () {
    function Fiat500(motore) {
        this.motore = motore;
        this.velocita = 0;
    }
    Fiat500.prototype.accelera = function () {
        this.velocita = this.motore.aumentaPotenza();
        return this.velocita;
    };
    return Fiat500;
}());
var Motore1200 = /** @class */ (function () {
    function Motore1200() {
    }
    Motore1200.prototype.aumentaPotenza = function () {
        return 50;
    };
    Motore1200.prototype.riduciPotenza = function () {
        return -50;
    };
    return Motore1200;
}());
var Motore1800 = /** @class */ (function () {
    function Motore1800() {
    }
    Motore1800.prototype.aumentaPotenza = function () {
        return 90;
    };
    Motore1800.prototype.riduciPotenza = function () {
        return -50;
    };
    return Motore1800;
}());
var Officina = /** @class */ (function () {
    function Officina() {
        this.macchine = [];
        this.macchine.push(new Fiat500(new Motore1200));
        this.macchine.push(new Fiat500(new Motore1800));
    }
    Officina.prototype.testaMacchine = function () {
        for (var _i = 0, _a = this.macchine; _i < _a.length; _i++) {
            var m = _a[_i];
            console.log(m.accelera());
        }
    };
    return Officina;
}());
var officina = new Officina();
officina.testaMacchine();
