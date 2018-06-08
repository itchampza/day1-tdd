const plus = function (x) {
    
    if((x % 5 == 0) && (x % 3 == 0)){return 'fizzbuzz'}
     if(x % 3 == 0) {return 'Fizz' } 
    else if( x % 5 == 0){return 'buzz' } 
     
    else{return x  }
}

module.exports = plus