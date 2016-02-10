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
		shmeiwseis : String,
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
		kinhtikothta : {
			myikh_isxys : {
				global : Boolean,
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
				global : Boolean,
				dyskampsia : Boolean,
				spastikothta : Boolean,
				shmeio_odontotou_troxou : Boolean,
				allo : String
			}
		},
		myikh_atrofia : {
			global : Boolean ,
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
			right : Boolean ,
			left : Boolean ,
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

	
    var Patient = mongoose.model('Patient', patientSchema);
    var Eksetash = mongoose.model('Eksetash', eksetashSchema);
	
	module.exports.Patient = Patient;
	module.exports.Eksetash = Eksetash;
