require('dotenv').config();
const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3001,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbPort: process.env.DB_PORT,
	dbName: process.env.DB_NAME,
	jwtSecret: process.env.JWT_SECRET,
	// API ENVIA
	apiUrlEnvia: process.env.URL_API_ENVIA,
	tokenEnvia: process.env.TOKEN_API_ENVIA,
	queriesUrlEnvia: process.env.QUERIES_API_ENVIA,
	// SOCKET
	socket: process.env.SOCKET_PORT
};

module.exports = { config };