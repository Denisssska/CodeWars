function positiveSum(arr) {
    let out = 0;
    for(i = 0; i < arr.length; i++){
      if( arr.length === 0){
        arr[i] = 0;
      } else if( arr[i] <= 0){
        out += 0;
      } else {
        out += arr[i];
      }
    }
        return out ;
}

//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.