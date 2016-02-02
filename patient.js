// server.js

    var mongoose = require('mongoose');                     // mongoose for mongodb
	
	/*
	MAP THE HTML INPUT INTO MONGOSE TABLES
	*/
	
	var Schema = mongoose.Schema;	
	var patientSchema = new Schema(	
	{
        hmeromhnia_eggrafhs : String,
		onomateponymo : String,
        hmeromhnia_gennhshs : Date,
        dieythinsh : String, 
		phone : String,
		atomika : {
			smoke : Boolean ,
			alkool : Boolean,
			allergies : Boolean,
			pathiseis : {
				global : Boolean,
				artiriaki : Boolean,
				diabitis : Boolean,
				dyslipidiamia : Boolean,
				ypothyreoeidismos : Boolean,
				yperthyreoeidismos : Boolean,
				alles : String,
				farmako1 : String,
				farmako2 : String,
				farmako3 : String,
				farmako4 : String,
				farmako5 : String
				}
			}
    });

	var eksetashSchema = new Schema(
	{
		_patient : { type: Schema.Types.ObjectId, ref: 'Patient' },
		neyrologiki_right : {
			global : Boolean ,
			check_one : Boolean , 
			optiki_oksitita : String , 
			optika_pedia : String
		},
		neyrologiki_left: {
			global : Boolean ,
			check_one : Boolean , 
			optiki_oksitita : String , 
			optika_pedia : String
		}
	  
	});

	
    var Patient = mongoose.model('Patient', patientSchema);
    var Eksetash = mongoose.model('Eksetash', eksetashSchema);
	
	module.exports.Patient = Patient;
	module.exports.Eksetash = Eksetash;
