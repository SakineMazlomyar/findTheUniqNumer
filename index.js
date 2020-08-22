
function findUniq(arr){
  
    let count = {};
    arr.forEach((value)=> {
      count[value]=(count[value]+1) ||1
      
    })

    for(let[k,v] of Object.entries(count)){
      
      let n = Number(k);
      if( v == 1){
      
        return n
      
      }
    }
 
}

console.log(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]))