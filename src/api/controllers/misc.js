'use strict';
const q = require('q');

class MiscController {

    constructor(){
        // this.createDemo = this.createDemo.bind(this);
        // this.createUser = this.createUser.bind(this);
    }

    Post(){
        let deferred = q.defer();
        // Member.findOne({},'division',{sort:{division:-1}})
        // .then(latest => {
        //     let division = 100;
        //     if(latest){
        //        division = latest.division + 1; 
        //     }          

        //     deferred.resolve(division);
        // });8
        // return deferred.promise;
        deferred.resolve("ABC");
        return deferred.promise;
    }

}

module.exports = MiscController;