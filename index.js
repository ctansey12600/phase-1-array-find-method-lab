function superbowlWin(array){
  let result = array.find(function(element){
       return element.result === `W`
    })
    if(result === undefined){
        return undefined
    }else{
       return result.year
    }
}