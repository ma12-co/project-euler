function sym(args) {

    let merged = []
    let symmetric = []

    for (let i of arguments) {
        merged = [...merged, ...i]
    }
    for (let i = 0; i < merged.length; i++) {
        let count = 0
      for(let j=0; j < merged.length; j++) {
          
          if (merged[i] === merged[j] ) {
              count++
          }
      }
      if(count === 1) {
          symmetric = [...symmetric, merged[i]]
      }
    }
    console.log(symmetric)
    return(symmetric)
}

sym([1, 2, 3], [5, 2, 1, 4])