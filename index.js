function superbowlWin(array){
    array.find(function(element){
        if(element.result === `W`){
            return element.year
        }
    })
}