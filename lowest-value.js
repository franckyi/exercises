// function findSmallestInt(...args) {
//       console.log(Math.min(...args))
//     }
  
//   findSmallestInt(3,1,15,-3)


class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }

  let newSearch = new SmallestIntegerFinder;
  console.log(newSearch.findSmallestInt([78,56,232,-3,12,8]));