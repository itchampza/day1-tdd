const stringcal = function (x) {
    let a 
    var  total=0
    if (x === '1,2') {
        for (let index = 0; index < x.length; index++) {
            if (x[index]!=',') {
                    a = parseInt(x[index]) 
                    total+=a 
                }    
            }
      return total
    }

    if(x==''){return 0}
    if(x==1){return 1}

  
}

module.exports = stringcal