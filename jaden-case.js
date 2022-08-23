// const toJadenCase = (str) => {
//     let a = str.replace( /(^|\s)[a-z]/g, function(x) {return x.toUpperCase()} )
//     console.log(a)
// }
// toJadenCase(`mi chiamo peppino... detto pepo`)

// String.prototype.toJadenCase = function() {
//         return this.replace( /(^|\s)[a-z]/g, function(x) {return x.toUpperCase()} )
// }

String.prototype.toJadenCase = function() {
    console.log(this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase() }));
    // return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase() });
  };

('mi chiamo giuseppe... detto peppino').toJadenCase()