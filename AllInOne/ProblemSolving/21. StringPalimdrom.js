// const isPalimdrom = (str)=>{
//    let reverseString =  str.split('').reverse().join('')
//    if(str === reverseString){
//        console.log('Palimdrom')
//    }
//    else{
//     console.log('Not a Palimdrom')
//    }
// }

// isPalimdrom('maam')

const isPalimdrom = (str)=>{
    for(let i=0;i < (str.length/2); i++ ){
        if(str[i] === str[str.length - 1 - i]){
           return 'iS palimdrom'
        }
        else{
            return 'iS not palimdrom'
        }
    }
}

console.log(isPalimdrom('namang'))