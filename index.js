

function test(arr){
    let uniq = arr.filter((value,i,self)=>{ return self.indexOf(value) === i});

  
    let count = {};
    arr.forEach((value)=> {
      count[value]=(count[value]+1) ||1
      
    })
 
 
    for(let i = 0; i<uniq.length; i++){
        
       for(let[k,v] of Object.entries(count)){
         
         let n = Number(k);
         if(uniq[i] === n && v == 1){
          
           return uniq[i]
         
         }
       }
 
    }

}

console.log(test([ 0, 1, 1, 1, 1, 1, 1, 1 ]))