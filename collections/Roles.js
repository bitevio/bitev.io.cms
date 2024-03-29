const {
    Collection
} = require("@bitev.io/core/types");
module.exports= Collection({
       slug:"Roles",
       fields:[
        {
        name:"name",
        type:"string",
        unique:true,
        },
        {
            name:'description',
            type:'textarea'
        },
        {
            name:'permissions',
            type:'json'
        }
    ]
})