//task1
function arrPop(add){
    let arr=["malibu","matiz","damas"]
   arr[arr.length-1]=add
    console.log(arr)
}
arrPop("dsdsd")


// task2
function arrPush(add){
    let arr=["malibu","matiz","damas"]
    arr=arr.concat([add])
    alert(arr)

}
arrPush("spark")


//task3   
let names=["jasur", "maxmud","murod","dilshod","bobur"]

for (let i=0 ; names.length>i ; i++){
    alert((1+i)+") " + names[i])

}


