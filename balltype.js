// class Ball {
//     constructor(ballType) {
//       this.ballType = ballType;
//       if(this.ballType === undefined) this.ballType = 'regular';
//       console.log(this.ballType)
//     }
//   }
//   // Utilizzo:
//   let AdidasFZ40 = new Ball('regular');
//   let NikeR = new Ball()

let Ball = function(ballType) {
    // your code goes here
        this.ballType = ballType;
        if(this.ballType === undefined) this.ballType = 'regular';
        // return this.ballType
        console.log(this.balltype)
  };
// console.log(typeof Ball)
// console.log(typeof ballType)
Ball('regular')


let SalutaNome = function(nome) {
    this.valoreNome = nome;
    console.log(`Ciao ${this.valoreNome}`)
}

SalutaNome('Francky')