// server.js

//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
	var multer = require('multer'); 
	var fs = require('fs');
	var session = require('express-session');
	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;
	
    // configuration =================

	// For now connect to remote. Need to connect localy once mongodb in installed and run as service.
    //mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io
	
	//Connect to database
	mongoose.connect( 'mongodb://localhost/doctor_database');

    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());
    app.use(session({
		secret : 'create authentications for neyrologikes eksetaseis',
		resave : true,
		saveUninitialized : false
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	/*
	MAP THE HTML INPUT INTO MONGOSE TABLES
	*/

	var DBmodule = require('./patient');
	var Patient = DBmodule.Patient;
	var Eksetash = DBmodule.Eksetash;
	var Account = DBmodule.Account;
	
	passport.use(Account.createStrategy());

	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(user, done) {
	  done(null, user);
	});
	
	passport.use(new LocalStrategy(function(username, password, done) {
	  process.nextTick(function() {
	
		var user = new Account({
		username: username,
		password: password,
		nickname : "",
		birthday : ""
		});
		
		if ( username=="test" && password=="test")
			return done(null, user);	  
		return done(null, false);
		
		//TODO actuall call mongodb schema to get the user credentials instead of keeping them here.
		  /*
		UserDetails.findOne({
		  'username': username, 
		}, function(err, user) {
		  if (err) {
			return done(err);
		  }

		  if (!user) {
			return done(null, false);
		  }

		  if (user.password != password) {
			return done(null, false);
		  }

		  return done(null, user);
		});
		*/
	  });
	}));
	
	app.get('/login', function(req, res) {
	  res.sendfile('./public/login.html')
	});

	app.post('/login', passport.authenticate('local', {
		successRedirect: '/patients',
		failureRedirect: '/login'
	  })
	);
	
	/* Handle Logout */
	app.get('/logout', function(req, res) {
	  req.logout();
	  res.redirect('/login');
	});
	
    // api ---------------------------------------------------------------------
    // get all Patients
    app.get('/api/patients', function(req, res) {
		
        // use mongoose to get all patients in the database
        Patient.find(function(err, patient) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            res.json(patient); // return all patients in JSON format
        });
    });

	
    // get a single patient
    app.get('/api/patients/:patient_id', function(req, res) {
		
		Patient.findById(req.params.patient_id, function(err, patient) {
		if (err) throw err;
		// show the one user
		res.json(patient); // return all patients in JSON format
		});		

    });


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/temp/')
  },
  filename: function (req, file, cb) {
      cb(null,  file.originalname );
  }
});

var upload = multer({ storage: storage });	
var uploadFile = upload.array('datafile',20);

	
	app.post('/api/upload', function (req, res, next) {
		
	var new_patient = new Patient(req.body);	

    uploadFile(req, res, function (err) {
        console.log('not ok');

        if (err) return next(err);
        res.status(204).end();
    });		
	// call the built-in save method to save to the database
	//res.json("");
    });

	
	app.post('/api/patients', upload.array('datafile',20), function (req, res, next) {

        // create a patient, information comes from AJAX request from Angular
	var new_patient = new Patient(req.body);	
	
	// call the built-in save method to save to the database
	new_patient.save( function(err, patient) {
		if (err)
			res.send(err);
		console.log();
		// Move the upload directory to a new patients/id directory
		var dir = './public/uploads/patients/'+new_patient._id+'/';
		fs.rename("./public/uploads/temp", dir, function(error){
			if(error)
				console.log("Couldn't move the directory");
			if (!fs.existsSync("./public/uploads/temp")){
				fs.mkdirSync("./public/uploads/temp");
			}
		});
		
		// get and return all the patients after you create another
		Patient.find(function(err, patients) {
			if (err)
				res.send(err)
			res.json(patients);
			});
		});
    });

    // create patient and send back all patients after creation
    app.put('/api/patients/:patient_id', function(req, res) {

		delete req.body._id;
		Patient.findByIdAndUpdate(req.params.patient_id, req.body, function(err, patient){
			if (err)
			{
				console.log("ERROR");
				res.send(err);
			}
		
            // get and return all the patients after you create another
				console.log("SUC1");
            Patient.find(function(err, patients) {
                if (err)
                    res.send(err)
				console.log("SUC2");
                res.json(patients);
				});
			}

		);
		
    });	
	
    // delete a patient
    app.delete('/api/patients/:patient_id', function(req, res) {

	
		Patient.findById(req.params.patient_id, function(err, patient) {
		if (err) throw err;
		  // delete him
		  patient.remove(function(err) {
			if (err) throw err;

            // get and return all the patients after you create another
            Patient.find(function(err, patients) {
                if (err)
                    res.send(err)
                res.json(patients);
            });			
			
		  });
  
		});		
	
    });	

/*	
    // delete a patient
    app.delete('/api/patients/:patient_id', function(req, res) {
        Patient.remove({
            _id : req.params.patient_id
        }, function(err, patient) {
            if (err)
                res.send(err);

            // get and return all the patients after you create another
            Patient.find(function(err, patients) {
                if (err)
                    res.send(err)
                res.json(patients);
            });
        });
    });	
*/
	

    // api ---------------------------------------------------------------------
	// EKSETASEIS FUNCTIONALITY

    // get all Eksetaseis
    app.get('/api/eksetaseis', function(req, res) {

        // use mongoose to get all patients in the database
        Eksetash.find(function(err, eksetash) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            res.json(eksetash); // return all patients in JSON format
        });
    });	
	
	// get Eksetaseis that belong to a patient.
    app.get('/api/eksetaseis/:patient_id', function(req, res) {
		
		Eksetash.find( {'_patient' : req.params.patient_id} , function(err, eksetaseis) {
		if (err) throw err;
		// show the one user
		console.log("BRHKA TIS EKSETASEIS " + eksetaseis);
		res.json(eksetaseis); // return all patients in JSON format
		});		

    });

	
	// get single Eksetash by id.
    app.get('/api/eksetaseis/by_id/:eksetash_id', function(req, res) {
		
		Eksetash.findById( req.params.eksetash_id , function(err, eksetash) {
		if (err) throw err;
		// show the one user
		console.log("BRHKA TIS EKSETASEIS " + eksetash);
		res.json(eksetash); // return all patients in JSON format
		});		

    });
	
    // create eksetash that belongs to a patient
    app.post('/api/eksetaseis/:patient_id', function(req, res) {
		console.log("ADDING EKSETASH FOR" + req.params.patient_id);
		console.log(req.body)

		Patient.findById(req.params.patient_id, function(error, patient) {
			if (error) {
				console.log("ERROR");
				}

			var eksetash = new Eksetash(req.body);
			eksetash._patient= patient._id;
			eksetash.save(function (err) {
			if (err) {
				res.send(err);
			}
			
			var dir = './public/uploads/eksetaseis/'+ eksetash._id + '/';
			// Move the upload directory to a new eksetaseis/id directory
			fs.rename("./public/uploads/temp", dir, function(error){
				if(error)
					console.log("Couldn't move the directory");
				if (!fs.existsSync("./public/uploads/temp")){
					fs.mkdirSync("./public/uploads/temp");
				}
			});
			
			// We added the eksetash. Time to return the updated eksetaseis array .
			Eksetash.find( {'_patient' : patient._id} , function(err, eksetaseis) {
				if (err) throw err;
				res.json(eksetaseis); 
				});				
			
			});

		});	
		
    });

    // delete an eksetash and return the rest of eksetaseis that belong to a patient.
    app.delete('/api/eksetaseis/by_id/:eksetash_id/:patient_id', function(req, res) {

		Eksetash.findById(req.params.eksetash_id, function(err, eksetash) {
		if (err) throw err;
		  // delete him
		  eksetash.remove(function(err) {
			if (err) throw err;

            // get and return all the eksetaseis after you create another
			Eksetash.find( {'_patient' : req.params.patient_id} , function(err, eksetaseis) {
			if (err) throw err;
			// show the one user
			console.log("BRHKA TIS EKSETASEIS " + eksetaseis);
			res.json(eksetaseis); // return all patients in JSON format
			});			
			
		  });
  
		});		
	
    });

    app.get('/patient*', function(req, res) {
		if (req.user)
			res.sendfile('./public/patients.html');
		else
			res.sendfile('./public/login.html');
    });
	
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

	if (!fs.existsSync("./public/uploads/temp")){
		fs.mkdirSync("./public/uploads/temp");
	}			
	if (!fs.existsSync("./public/uploads/eksetaseis")){
		fs.mkdirSync("./public/uploads/eksetaseis");
	}			
	if (!fs.existsSync("./public/uploads/patients")){
		fs.mkdirSync("./public/uploads/patients");
	}			
	
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

