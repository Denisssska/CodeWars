function countPositivesSumNegatives(input) {
        let a = []
    a[0] = 0;
    a[1] = 0;
    b = [];
    if( input === null){
    return []
    }
    for(let i = 0; i < input.length; i++)
    if ( input[i] > 0){
    b.push(input[i])
             
    a[0] = b.length 
         
    }
    else {
    a[1] += input[i];
    }
    if( a[0] == 0 && a[1] == 0){
               
    return []
    }
          
    return a
    }