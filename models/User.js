const 	mongoose 		= require('mongoose'),
	 	{ Schema } 		= mongoose,
	 	{ ObjectId }	= mongoose.Types;

const userSchema = new Schema({
	joindate: Number,
	first_name: String,
	last_name: String,
	auth: {
		facebookId: String,
		googleId: String
	},
	address: {
		street: String,
		post_code: String,
		city: String
	},
	contact: {
		email: String
	},
	security: {
		password: String,
		verified: Boolean
	},
	agreements: {
		rodo: Boolean
	}
});

mongoose.model('user', userSchema);