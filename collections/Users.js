const {
       Collection
   } = require("@bitev.io/core/types");

module.exports= Collection({
       slug:"Users",
       fields:[
       {
        name:"email",
        type:"string",
       },
       {
              name:"password",
              type:"string",
       }
]
})