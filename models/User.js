var mongoose = require('mongoose') ;
var Schema = mongoose.Schema ;

module.exports = mongoose.model('user', new Schema({
	username: String ,
	password: String ,
	type: String,
	moderated: Boolean
}))