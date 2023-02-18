function howMuchILoveYou(nbPetals) {
    // your code
    const phrase1= 'I love you';
    const phrase2= 'a little';
    const phrase3= 'a lot';
    const phrase4= 'passionately';
    const phrase5= 'madly';
    const phrase6= 'not at all';
    
    if(nbPetals > 6) {
        while(nbPetals > 6) {
            (nbPetals= nbPetals-6)
        }
    }
    console.log(nbPetals);
    if (nbPetals === 1)  { console.log(phrase1) }
    else if (nbPetals === 2)  { console.log(phrase2) }
    else if (nbPetals === 3)  { console.log(phrase3) }
    else if (nbPetals === 4)  { console.log(phrase4) }
    else if (nbPetals === 5)  { console.log(phrase5) }
    else if (nbPetals === 6)  { console.log(phrase6) }
}
howMuchILoveYou(4)
