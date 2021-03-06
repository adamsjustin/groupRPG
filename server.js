const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const path = require('path');
const config = require('./config/config.json');
var passport = require('passport');
var expressSession = require('express-session');


var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// middlewares
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Please use your own details here
const checkJwt = jwt({
	// Dynamically provide a signing key
	// based on the kid in the header and
	// the singing keys provided by the JWKS endpoint.
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: 'https://tsrpg.auth0.com/.well-known/jwks.json',
	}),

	// Validate the audience and the issuer.
	audience: 'https://tsrpg.auth0.com/api/v2/',
	issuer: 'https://tsrpg.auth0.com/',
	algorithms: ['RS256']
});

// routes
app.post('/', checkJwt, (req, res) => {
  // appbaseRef.index({
  //   type: ES_TYPE,
  //   id: req.body.id,
  //   body: {
  // id: req.body.id,
  // title: req.body.title,
  // completed: false,
  // createdAt: req.body.createdAt,
  // name: req.body.name,
  // avatar: req.body.avatar
  // }
  // }).on("data", function(response) {
  // res.send({
  //   status: 200,
  //   message: 'success'
  // });
  // }).on("error", function(error) {
  // console.error(error);
  // res.send(error);
  // })
})

app.delete('/', checkJwt, (req, res) => {
	// appbaseRef.delete({
	// 	type: ES_TYPE,
	// 	id: req.body.id
	// }).on("data", function(response) {
	// 	res.send({
	// 		status: 200,
	// 		message: 'success'
	// 	});
	// }).on("error", function(error) {
	// 	console.error(error);
	// 	res.send(error);
	// })
})
// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));


// // Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/public/index.html'));
// });

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);