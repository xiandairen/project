/**
 * Created by xywy on 2015/12/5.
 */


var mongoose = requrie("mongoose");

mongoose.connect("mongdb://127.0.0.1/zhufengpeixunblog201508");

mongoose.model("User", new mongoose.Schema({
    username:String,
    password:String
}));

global.Model = function(modName){
    return mongoose.model(modName);
}








