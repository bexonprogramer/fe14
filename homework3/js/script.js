function getCardNumber(number){
    if( number==Number(number) && number.length==16 && number.substring(4,0)=="8600" ){
        alert(number.slice(0,4)+" **** **** "+number.substr(-4,4))
    }else if( number==Number(number) && number.length> 16 || number.length< 16  ){
        alert(`16ta raqamdan kam yoki ko'p`)
    }else if( !(number.slice(0, 4)=="8600") && number==Number(number)  ){
        alert('!!! Bu UZCARD emas !!!')
    } else alert('xato')
    
}

getCardNumber("8600199009900990")