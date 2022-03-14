6 kyu
Take a Ten Minute Walk
JavaScript:
function isValidWalk(walk) {
    let out = walk.length;
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    for( let i = 0; i < walk.length; i++){
        if( walk[i] === 'n'){
            n += 1;
            //console.log(n.length - 1)
        }else if( walk[i] === 's'){
            s += 1;
        }else if(walk[i] === 'w'){
            w += 1;
        } else if( walk[i] === 'e'){
            e += 1;
        }
    }
        if(n - s === 0 && w - e === 0 && out === 10){
            return true;
        }
        return false;
  
  }