const mongoClient=require('mongodb').MongoClient


const state={
    db:null 
}

// mongodb+srv://Aswin:Ashwin123@cluster0.idhgkg3.mongodb.net/?retryWrites=true&w=majority'

module.exports.connect=function(done){ 
    const url='mongodb://localhost://27017' 
    const dbname='project' 
  
    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname) 
        done()
    })
}


module.exports.get = function(){
    return state.db
}