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
		hmeromhnia : Date,
		egkefalikes_syzigies : {
			global : Boolean ,
			neyrologiki_right : {
				global : Boolean ,
				field_2 : {
					check : Boolean , 
					optiki_oksitita : String , 
					optika_pedia : String ,
					shmeiwseis : String 
					},
				field_3 : {
					check : Boolean ,
					kores : {
						myhsh : Boolean ,
						mydriash : Boolean
						} ,
					phwtokinhtiko : Boolean ,
					aneklysh_blefarwn : Boolean ,
					diplwpia : Boolean ,
					shmeiwseis : String 
					},
				field_4 : {
					check : Boolean , 
					diplwpia : Boolean , 
					shmeiwseis : String 
					}, 
				field_6 : {
					check : Boolean , 
					diplwpia : Boolean , 
					shmeiwseis : String 
					},
				field_5 : {
					check : Boolean , 
					V1 : Boolean , 
					V2 : Boolean , 
					V3 : Boolean 
					},
				field_7 : {
					check : Boolean , 
					anw : Boolean , 
					katw : Boolean , 
					diataraxh_geyshs : Boolean , 
					diataraxh_saliou_dakrywn : Boolean , 
					shmeiwseis : String 
					},
				field_8 : {
					check : Boolean , 
					nystagmos : {
						check :Boolean , 
						shmeiwseis : String
						},
					romberg : {
						check :Boolean , 
						shmeiwseis : String
						},
					unterberger : {
						check :Boolean , 
						shmeiwseis : String
						},
					rinne : {
						check :Boolean , 
						shmeiwseis : String
						},
					weber : {
						check :Boolean , 
						shmeiwseis : String
						},
					shmeiwseis : String 
					},
				field_9 : {
					check : Boolean , 
					diataraxi_anypsews_malthakis_yperwas : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_theshs_stafylhs : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_kataposhs : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_fwnhshs : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_aisthhtikotitas_farygga : { 
						check :Boolean , 
						shmeiwseis :String
						},
					antanaklastiko_farygga : {
						k_f : Boolean,
						oxi : Boolean
						},
					shmeiwseis : String 
					},
				field_10 : {
					check : Boolean , 
					shmeiwseis : String 
					},
				field_11 : {
					check : Boolean , 
					sternokl : {
						k_f : Boolean,
						oxi : Boolean,
						atrofia : Boolean
						},
					trapezoeidhs : {
						k_f : Boolean,
						oxi : Boolean,
						atrofia : Boolean
						},
					shmeiwseis : String 
					},
				field_12 : {
					check : Boolean , 
					thesh_glwssas : {
						k_f : Boolean,
						oxi : Boolean,
						},
					shmeiwseis : String 
					}
			},
			neyrologiki_left: {
				global : Boolean ,
				field_2 : {
					check : Boolean , 
					optiki_oksitita : String , 
					optika_pedia : String ,
					shmeiwseis : String 
					},
				field_3 : {
					check : Boolean ,
					kores : {
						myhsh : Boolean ,
						mydriash : Boolean
						} ,
					phwtokinhtiko : Boolean ,
					aneklysh_blefarwn : Boolean ,
					diplwpia : Boolean ,
					shmeiwseis : String 
					},
				field_4 : {
					check : Boolean , 
					diplwpia : Boolean , 
					shmeiwseis : String 
					}, 
				field_6 : {
					check : Boolean , 
					diplwpia : Boolean , 
					shmeiwseis : String 
					},
				field_5 : {
					check : Boolean , 
					V1 : Boolean , 
					V2 : Boolean , 
					V3 : Boolean 
					},
				field_7 : {
					check : Boolean , 
					anw : Boolean , 
					katw : Boolean , 
					diataraxh_geyshs : Boolean , 
					diataraxh_saliou_dakrywn : Boolean , 
					shmeiwseis : String 
					},
				field_8 : {
					check : Boolean , 
					nystagmos : {
						check :Boolean , 
						shmeiwseis : String
						},
					romberg : {
						check :Boolean , 
						shmeiwseis : String
						},
					unterberger : {
						check :Boolean , 
						shmeiwseis : String
						},
					rinne : {
						check :Boolean , 
						shmeiwseis : String
						},
					weber : {
						check :Boolean , 
						shmeiwseis : String
						},
					shmeiwseis : String 
					},
				field_9 : {
					check : Boolean , 
					diataraxi_anypsews_malthakis_yperwas : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_theshs_stafylhs : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_kataposhs : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_fwnhshs : { 
						check :Boolean , 
						shmeiwseis :String
						},
					diataraxi_aisthhtikotitas_farygga : { 
						check :Boolean , 
						shmeiwseis :String
						},
					antanaklastiko_farygga : {
						k_f : Boolean,
						oxi : Boolean
						},
					shmeiwseis : String 
					},
				field_10 : {
					check : Boolean , 
					shmeiwseis : String 
					},
				field_11 : {
					check : Boolean , 
					sternokl : {
						k_f : Boolean,
						oxi : Boolean,
						atrofia : Boolean
						},
					trapezoeidhs : {
						k_f : Boolean,
						oxi : Boolean,
						atrofia : Boolean
						},
					shmeiwseis : String 
					},
				field_12 : {
					check : Boolean , 
					thesh_glwssas : {
						k_f : Boolean,
						oxi : Boolean,
						},
					shmeiwseis : String 
					}
			}
		},
		kinitikotita : {
			global : Boolean ,
		},
		myiki_atrofia : {
			global : Boolean ,
		},
		paregkefalidikes_dokimasies : {
			global : Boolean ,
		},
		antanaklastika : {
			global : Boolean ,
		},
		aisthhtikothta : {
			global : Boolean ,
		},
		loipa : {
			global : Boolean ,
		}
	});

	
    var Patient = mongoose.model('Patient', patientSchema);
    var Eksetash = mongoose.model('Eksetash', eksetashSchema);
	
	module.exports.Patient = Patient;
	module.exports.Eksetash = Eksetash;
