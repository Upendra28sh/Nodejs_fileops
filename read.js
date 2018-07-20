const file=require('fs')

file.readFile(__dirname+'/data.txt', function(err,data)
{
    if(err)
    {
        throw err
    }
    console.log(data.toString())
})


