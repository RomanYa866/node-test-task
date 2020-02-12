function duplicatesCount(str) {
    if(!str){
        console.log("emty")
    }
   const newStr1=str.toLowerCase()
   const newStr2=Array.from(newStr1)
    var result = [];
    for (var i = 0; i < newStr2.length; ++i){
        var p = newStr2[i];
        if (result[p])
            ++result[p];
        else
            result[p] = 1;
    }
    for (var x in result)
        console.log(' Cимвол ' + x + ' повторился ' + result[x] + ' разa');
}
duplicatesCount("aaajssbjckadfhdd")

