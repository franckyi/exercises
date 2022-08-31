  let haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
  let pos = haystack.indexOf('needle');
  console.log(`found the needle at position ${pos}`);

  function findNeedle(haystack) {
    // your code here
    let pos = haystack.indexOf('needle');
    return (`found the needle at position ${pos}`);
}

findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]);

let a = findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]);
console.log(a);
