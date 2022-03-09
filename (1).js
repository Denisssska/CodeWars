function well(x){
    let out = [];
    for ( let  i = 0; i < x.length; i++){
        if(x[i] === 'good'){
        out.push(x[i])
        }
    }
    //console.log(out)
    
    if (out.length == 0) {
      return 'Fail!'
        //console.log('zero')
    }else if (out.length <= 2 && out.length > 0) {
      return 'Publish!'
      //console.log('one or two')
    }else {
      return  'I smell a series!'
       // console.log('more then three')
    }
}


//For every good kata idea there seem to be quite a few bad ones!

//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.