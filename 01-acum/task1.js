function accum(str) {
    if(!str){
        console.log("emty")
    }
    const newArray =Array.from(str)
    const tempRes =newArray.map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    const resStr=tempRes.join('-')
    return resStr
}
console.log(accum("aaddffvRE"))