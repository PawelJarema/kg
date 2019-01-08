const 	mongoose 		= require('mongoose'),
	 	{ Schema } 		= mongoose;

const miejscowoscSchema = new Schema({
	_wcode: String,
	name: String
});

mongoose.model('miejscowosc', miejscowoscSchema);
