const in_production = process.env.NODE_ENV === 'production';

if (in_production) {
	module.exports = require('./production');
} else {
	module.exports = require('./development');
}