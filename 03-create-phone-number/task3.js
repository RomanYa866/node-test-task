function createPhoneNumber(arr) {
    if(arr.length<10||arr.length>10) return console.log("wrong number of elements")
    for(var i=0;i<=arr.length;++i){
        if (arr[i]>9){
            return console.log("invalid value of array element")
        }
         if(!Number.isInteger(arr[i])){
            return console.log("invalid value of array element")
         }
    }
    const newString=arr.join('')
    return console.log('"(' + newString.substring(0, 3) + ') ' + newString.substring(3, 6) + '-' + newString.substring(6)+'"');
}

createPhoneNumber([1,2,3, 4, 5, 6, 7, 8, 9, 0])