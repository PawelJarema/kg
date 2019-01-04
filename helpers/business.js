const in_production = process.env.NODE_ENV === 'production';

module.exports = {
	name: 'Koła Gospodyń Wiejskich',
	email: 'info@kgw.pl',
	host: in_production ? '' : 'http://localhost:3000/',
	copyright: 'Copyright © 2018. Wszelkie prawa zastrzeżone'
};