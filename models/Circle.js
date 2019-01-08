const 	mongoose 		= require('mongoose'),
	 	{ Schema } 		= mongoose,
	 	{ ObjectId }	= Schema.Types;

const circleSchema = new Schema({
	_user: String,
	created: Number,
	name: String,
	location: {
		wojewodztwo: String,
		gmina: String,
		miejscowosc: String,
		coords: {
			lat: Number,
			lng: Number
		}
	}
});

mongoose.model('circle', circleSchema);
