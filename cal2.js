const test = function () {
    let count=0
     let loop=1
     for(  ; loop<=x ; loop++){
       if(loop % x == 0){count++}
       console.log(count)
     }
   if(count <=2){
       return 'prime'
    }else {
        return 'notprime'
    }
}

module.exports = test