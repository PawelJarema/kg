const 	mongoose 		= require('mongoose'),
	 	{ Schema } 		= mongoose;

const gminaSchema = new Schema({
	_wcode: String,
	name: String
});

mongoose.model('gmina', gminaSchema);
