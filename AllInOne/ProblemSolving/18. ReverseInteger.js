const reverseInteger =(num)=>{
    let revNum = num.toString().split('').reverse().join('')
    console.log(revNum)

    if(revNum.endsWith("-")){
        revNum = "-" + revNum;
        return parseInt(revNum)
    }else{
        return parseInt(revNum)
    }
}