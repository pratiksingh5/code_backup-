function pp(msg){
  return new Promise((resolve)=>{
      setTimeout(function(){
          resolve(msg)
      }, 3000)
  })
}

var async_f = async function(){
    var p1 = await pp('first');
    console.log(p1)


    var p2 = await pp('second');
    console.log(p2)

    console.log('done')
}

async_f()