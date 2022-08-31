function friend(friends){
    //your code here
    let filteredList= [];
    for(let i=0; i<friends.length; i++) {
        if (friends[i].length == 4) {
            filteredList.push(friends[i])
        }
    }
    return filteredList;
  }
 
//   let friend=["Ryan", "Kieran", "Jason", "Yous"];
//   console.log(friend[1].length);