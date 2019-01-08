const 	mongoose 		= require('mongoose'),
	 	{ Schema } 		= mongoose;

const wojewodztwoSchema = new Schema({
	code: String,
	name: String
});

mongoose.model('wojewodztwo', wojewodztwoSchema);
