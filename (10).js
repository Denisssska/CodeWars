function modifiedSum(a, n) {
   let sumA = 0;
    for( let i = 0; i < a.length; i++){
         sumA += Math.pow(a[i],n) - a[i]
         
    }
    return sumA
  // Write your code here
}