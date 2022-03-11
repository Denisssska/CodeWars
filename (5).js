function  calculateAge(born, year) {
    let a = 0;
    if ( born < year && year - born !== 1){
      a = year - born;
      return "You are " + a + " years old."
    }else if( born === year){
        return "You were born this very year!"
    }else if(born > year && born - year !== 1){
        a = born - year;
        return "You will be born in " + a +  " years."
    } else if(born < year){if(  year - born === 1){
      return "You are 1 year old."
    }
    } else if(born > year){if(  born - year === 1){
      return 'You will be born in 1 year.'
    }
    }
  }