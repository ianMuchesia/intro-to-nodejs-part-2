const {readFile , writeFile} = require('fs')

readFile('./content/first.txt','utf-8',(error, data)=>{
    if(error){console.log(error); return;}
    const first = data;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){console.log(err); return;}
        const second = result
        writeFile('./content/result-async.txt','here is the results',(error, result)=>{
            if(err){console.log(err);return;}
            console.log(result)
        })
    })
   
})