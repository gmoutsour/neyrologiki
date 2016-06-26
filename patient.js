// server.js

    var mongoose = require('mongoose');                     // mongoose for mongodb

	/*
	MAP THE HTML INPUT INTO MONGOSE TABLES
	*/

	var Schema = mongoose.Schema;
	var passportLocalMongoose = require('passport-local-mongoose');
	var patientSchema = new Schema(
	{
    amka: String,
    hmeromhnia_eggrafhs : String,
		onomateponymo : String,
    hmeromhnia_gennhshs : String,
    dieythinsh : String,
		phone : String,
    disease: String,
		atomika : {
      nosos : String,
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
			},
		oikogeneiako : {
			mhtera : String,
      pateras: String,
      aderfia: String,
      alloi: String
		},
			patient_file1 : String,
	patient_file2 : String
    });

	var eksetashSchema = new Schema(
	{
		_patient : { type: Schema.Types.ObjectId, ref: 'Patient' },
		hmeromhnia : String,
		shmeiwseis : String,
		eksetash_file1 : String,
		eksetash_file2 : String,
		eksetash_file3 : String,
		eksetash_file4 : String,
		eksetash_file5 : String,
		eksetash_file6 : String,
		eksetash_file7 : String,
		eksetash_file8 : String,
		egkefalikes_syzigies : {
			neyrologiki_right : {
				global_nai : Boolean ,
				global_oxi : Boolean ,
				field_2 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					optiki_oksitita : String ,
					optika_pedia : String ,
					shmeiwseis : String
					},
				field_3 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
					diplwpia : Boolean ,
					shmeiwseis : String
					},
				field_6 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					diplwpia : Boolean ,
					shmeiwseis : String
					},
				field_5 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					V1 : Boolean ,
					V2 : Boolean ,
					V3 : Boolean
					},
				field_7 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					anw : Boolean ,
					katw : Boolean ,
					diataraxh_geyshs : Boolean ,
					diataraxh_saliou_dakrywn : Boolean ,
					shmeiwseis : String
					},
				field_8 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
					shmeiwseis : String
					},
				field_11 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
					thesh_glwssas : {
						k_f : Boolean,
						oxi : Boolean,
						},
					shmeiwseis : String
					}
			},
			neyrologiki_left : {
				global_nai : Boolean ,
				global_oxi : Boolean ,
				field_2 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					optiki_oksitita : String ,
					optika_pedia : String ,
					shmeiwseis : String
					},
				field_3 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
					diplwpia : Boolean ,
					shmeiwseis : String
					},
				field_6 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					diplwpia : Boolean ,
					shmeiwseis : String
					},
				field_5 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					V1 : Boolean ,
					V2 : Boolean ,
					V3 : Boolean
					},
				field_7 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
					anw : Boolean ,
					katw : Boolean ,
					diataraxh_geyshs : Boolean ,
					diataraxh_saliou_dakrywn : Boolean ,
					shmeiwseis : String
					},
				field_8 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
					shmeiwseis : String
					},
				field_11 : {
					check_nai : Boolean ,
					check_oxi : Boolean ,
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
					check_nai : Boolean ,
					check_oxi : Boolean ,
					thesh_glwssas : {
						k_f : Boolean,
						oxi : Boolean,
						},
					shmeiwseis : String
					}
			},
		},
		kinhtikothta : {
			myikh_isxys : {
				global_nai : Boolean,
				global_oxi : Boolean,
				kentrikou_typou : {
					check : Boolean,
					hmiparesh : Boolean,
					paraparesh : Boolean
				},
				periferikou_typou : {
					check : Boolean,
					shmeiwseis : String
				}

			},
			myikh_tonos : {
				global_nai : Boolean,
				global_oxi : Boolean,
				dyskampsia : Boolean,
				spastikothta : Boolean,
				shmeio_odontotou_troxou : Boolean,
				allo : String
			}
		},
		myikh_atrofia : {
			global_nai : Boolean ,
			global_oxi : Boolean ,
			wmiki_zwnh : {
				right : Boolean,
				left : Boolean
			},
			akra_xeira : {
				right : Boolean,
				left : Boolean
			},
			pyelikh_zwnh : {
				right : Boolean,
				left : Boolean
			},
			mys_knhmhs : {
				right : Boolean,
				left : Boolean
			},
			akros_pous : {
				right : Boolean,
				left : Boolean
			},
			stash_badish : {
				global : Boolean,
				spastiko : {
					check : Boolean,
					hmiplhgiko : {
						check : Boolean,
						right : Boolean,
						left : Boolean
					},
					paraplhgiko : Boolean
				},
				ataksiko : {
					check : Boolean,
					aisthhtikh_ataksia : Boolean,
					paregkefalidiko : Boolean
				},
				spastikoataksiko : {
					check : Boolean
				},
				parkinsoniko : {
					check : Boolean
				},
				kalpastiko : {
					check : Boolean,
					right : Boolean,
					left : Boolean
				},
				nhsseio : {
					check : Boolean
				},
				allo : {
					check : Boolean
				}
			}
		},
		paregkefalidikes_dokimasies : {
			global : Boolean ,
			right_nai : Boolean ,
			right_oxi : Boolean ,
			left_nai : Boolean ,
			left_oxi : Boolean ,
			deikths_rina : {
				right : Boolean ,
				left : Boolean
			},
			pterna_gony : {
				right : Boolean ,
				left : Boolean
			},
			dysdiadocokinhsia : {
				right : Boolean ,
				left : Boolean
			},
			gordon_holmes : {
				right : Boolean ,
				left : Boolean
			},
			stash : {
				right : Boolean ,
				left : Boolean
			}
		},
		antanaklastika : {
			pelmatiaia : {
				kampsh : {
					right : Boolean,
					left : Boolean
				},
				babinski : {
					right : Boolean,
					left : Boolean
				},
				allo : {
					right : String,
					left : String
				}
			},
			tenontia_antanaklastika : {
				omotima : {
					value : Number,
					label : String
				},
				pathologika1 : {
					check : Boolean,
					dikefalou : {
						right :Boolean,
						left :Boolean
					},
					trikefalou : {
						right :Boolean,
						left :Boolean
					},
					braxkerkidiko : {
						right :Boolean,
						left :Boolean
					},
					epigonatio : {
						right :Boolean,
						left :Boolean
					},
					axilleio : {
						right :Boolean,
						left :Boolean
					}

				},
				pathologika2 : {
					check : Boolean,
					klimaka_polyneyropatheias_1 : Boolean,
					klimaka_polyneyropatheias_2 : Boolean
				}
			}
		},
		aisthhtikothta : {
			anw_akra : {
				epipolhs : String ,
				en_tw_bathei : String
			},
			katw_akra : {
				epipolhs : String ,
				en_tw_bathei : String
			}
		},
		loipa : {
			orthokystikes_diataraxes : Boolean ,
			epipedo_syneidhshs : Boolean ,
			anwteres_nohtikes_leitourgies : Boolean
		}

	});

	var FarmakoSchema = new Schema(
	{
		_patient : { type: Schema.Types.ObjectId, ref: 'Patient' },
		name : String,
		sygentrosi : String,
    dosage : String,
		hmeromhnia_from : String,
		hmeromhnia_to : String
	});


	var AccountSchema = new Schema(
	{
		username: String,
		password: String,
		nickname: String,
		birthday: Date
	});

	AccountSchema.plugin(passportLocalMongoose);

    var Patient = mongoose.model('Patient', patientSchema);
    var Eksetash = mongoose.model('Eksetash', eksetashSchema);
    var Farmako = mongoose.model('Farmako', FarmakoSchema);
    var Account = mongoose.model('Account', AccountSchema);

	module.exports.Patient = Patient;
	module.exports.Eksetash = Eksetash;
	module.exports.Farmako = Farmako;
	module.exports.Account = Account;
