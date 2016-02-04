// server.js

//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================

	// For now connect to remote. Need to connect localy once mongodb in installed and run as service.
    //mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io
	
	//Connect to database
	mongoose.connect( 'mongodb://localhost/doctor_database');

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

	/*
	MAP THE HTML INPUT INTO MONGOSE TABLES
	*/
//	var Patient = require('./patient');
	var DBmodule = require('./patient');
	var Patient = DBmodule.Patient;
	var Eksetash = DBmodule.Eksetash;

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
	
    // create patient and send back all patients after creation
    app.post('/api/patients', function(req, res) {
    console.log(req.body);
        // create a patient, information comes from AJAX request from Angular

	var new_patient = new Patient(req.body);	
    console.log(new_patient);
	
	// call the built-in save method to save to the database
	new_patient.save( function(err, patient) {
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



	
    app.get('*', function(req, res) {
		//res.sendfile('./public/page_404.html');
		//res.json("ton mpoulo");
		res.sendfile('./public/patients.html');
    });	
	
/*	
// SEND THE INDEX PAGE ON EEVERY REQUEST.
    app.get('/doctors/*', function(req, res) {
        res.sendfile('./public/doctors.html'); // load the single view file (angular will handle the page changes on the front-end)
    });	
*/
	
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

