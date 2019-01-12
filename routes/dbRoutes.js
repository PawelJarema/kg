const		fs				= require('fs'),
			csv 			= require('csvtojson'),
			mongoose 		= require('mongoose'),
			{ ObjectId } 	= mongoose.Types,
			User 			= mongoose.model('user'),
			Circle 			= mongoose.model('circle'),
			Wojewodztwo 	= mongoose.model('wojewodztwo'),
			Gmina			= mongoose.model('gmina'),
			Miejscowosc 	= mongoose.model('miejscowosc');

const capitalizeFirstLetter = string => {
	return string.slice(0, 1) + string.slice(1).toLowerCase();
}

module.exports = app => {
	app.post('/api/miejscowosci', async (req, res) => {
		const wcode = req.body.wcode,
		      text 	= new RegExp(req.body.text, 'i'),
			  query = { name: text },
			  options = { sort: { name: 1 } };

		if (wcode) {
			query['_wcode'] = wcode;
		}

		res.send(await Miejscowosc.find(query, null, options));
	});

	app.post('/api/gminy', async (req, res) => {
		const wcode = req.body.wcode,
		      text 	= new RegExp(req.body.text, 'i'),
			  query = { name: text },
			  options = { sort: { name: 1 } };

		if (wcode) {
			query['_wcode'] = wcode;
		}

		res.send(await Gmina.find(query, null, options));
	});

	app.post('/api/wojewodztwa', async (req, res) => {
		const text = new RegExp(req.body.text, 'i');
		res.send(await Wojewodztwo.find({ name: text }));
	});

	app.get('/api/cdata', async (req, res) => {
		await Wojewodztwo.deleteMany({}, resultFunction);
		await Gmina.deleteMany({}, resultFunction);
		await Miejscowosc.deleteMany({}, resultFunction);

		res.send(true);
	});

	app.get('/api/seeddb', async (req, res) => {
		// gminy i wojewodztwa
		csv({ delimiter: 'auto' })
		.fromFile('./data/areas.csv')
		.then(async json => {

			let 	wojewodztwa 		= [],
					gminyNames 			= new Set(),
					gminy 				= {},
					miejscowosciNames	= new Set(),
					miejscowosci		= {},
					resp				= {};

			const 	wojewodztwa_exist 	= Boolean(await Wojewodztwo.countDocuments({})),
					gminy_exits			= Boolean(await Gmina.countDocuments({})),
					miejscowosci_exits	= Boolean(await Miejscowosc.countDocuments({}));

			const setDataToArray = async (set, object) => {
				return await [...set].map(key => ({ _wcode: object[key], name: key }));
			}

			// wojewodztwa i gminy
			json.map(row => {
				const { WOJ, NAZWA, NAZWA_DOD } = row;

				if (NAZWA_DOD === 'województwo') {
					wojewodztwa.push({ code: WOJ, name: capitalizeFirstLetter(NAZWA) });
				} else {
					gminyNames.add(NAZWA);
					gminy[NAZWA] = WOJ;
				}
			});
			
			// miejscowosci
			await csv({ delimiter: 'auto' })
			.fromFile('./data/places.csv')
			.then(json => {
				json.map(row => {
					const { WOJ, NAZWA } = row;
					miejscowosciNames.add(NAZWA);
					miejscowosci[NAZWA] = WOJ;
				});
			});

			if (!wojewodztwa_exist) {
				Wojewodztwo.insertMany(wojewodztwa, resultFunction);
			}
			
			resp['wojewodztwa'] = !wojewodztwa_exist ? 'created' : 'exist';
		

			if (!gminy_exits) {
				const data = await setDataToArray(gminyNames, gminy);
				Gmina.insertMany(data, resultFunction);
				console.log(data.length);
			} 

			resp['gminy'] = !gminy_exits ? 'created' : 'exist';

			if (!miejscowosci_exits) {
				const data = await setDataToArray(miejscowosciNames, miejscowosci);
				Miejscowosc.insertMany(data, resultFunction);
				console.log(data.length);
			}

			resp['miejscowosci'] = !miejscowosci_exits ? 'created' : 'exist';

			res.send(resp);
		});
	});

	app.get('/api/clear', async (req, res) => {
		await User.deleteMany({});
		await Circle.deleteMany({});
		res.send(true);
	});
}

function resultFunction(err, docs) {
	if (err) console.log(err) 
	else console.log('docs saved.');
}