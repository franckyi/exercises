  function feast(beast, dish) {
    let b = beast.replace(/\s/g,'').toLowerCase()
    let d = dish.replace(/\s/g,'').toLowerCase()
    
    if ( b[0] === b[b.length-1] && d[0] === d[d.length-1] )
        {
        return true
    }
    else return false
  }



feast('a fs', 'au ybu  g ys')