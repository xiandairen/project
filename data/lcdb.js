/**
 * Created by xywy on 2015/12/5.
 */


var mongoose = require("mongoose");

 mongoose.connect("mongodb://127.0.0.1/zhufengpeixunblog201508");




mongoose.model("user",new mongoose.Schema({
    username:String,
    password:String
}));

global.Model = function(user){
    return mongoose.model(user)
};









