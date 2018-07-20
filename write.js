const file=require("fs")

file.writeFile(__dirname+'/data.txt',"more data",function(err)
{
    if(err)
    {
        throw err
    }
    console.log("File successfully written")
})

