// function Fiore() {
//     let colore, stagione;
//     this.colore = 'giallo';
// }

// ciclamino = new Fiore;
// console.log(ciclamino.colore);

// function Compositore(nome, strumento) {
//     this.compositoreNome = nome;
//     this.compositoreStrumento = strumento;
// }

// let chopin = new Compositore('Fryderyk', 'pianoforte');
// console.log(chopin.compositoreStrumento);
// console.log(chopin.compositoreNome);


// let dna = "RGCATT";
// // let result = dna.replace(/T/gi, "U");
// let result = dna.replaceAll(/T/g, "U");

// console.log(result)


// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     for(i=0; i < dna.length; i++) {
//         if(dna[i] === 'T') dna[i].replace('dna[i]','U');
//     }
//     console.log(dna);
//   }
// DNAtoRNA("GCATT")

function DNAtoRNA(dna) {
    let rna = dna.replace(/T/gi, 'U');
    return rna;
  }

DNAtoRNA("GCAT")






// DNAtoRNA('RGGCTT');
// console.log(DNAtoRNA);


// let result = DNAtoRNA('RGCAT');
// console.log(result)




