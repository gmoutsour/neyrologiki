(function() {



  var app = angular.module('doctors', ['ui.bootstrap', 'angularUtils.directives.dirPagination']);

  app.controller('patientController', function($scope, $http){
	$scope.patientformData = {};
	$scope.patientformData.hmeromhnia_eggrafhs = new Date();
    $scope.show_tab = 1;

$scope.sortKey="AMKA";
$scope.sortKey2="hmeromhnia";

  $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

	$scope.select_form_omotima = [
		{
		value: '0',
		label: 'κ.φ'
		},
		{
		value: '1',
		label: '+1'
		},
		{
		value: '2',
		label: '+2'
		},
		{
		value: '3',
		label: '+3'
		}
	];

    // when landing on the page, get all patients and show them
    $http.get('/api/patients')
        .success(function(data) {
            $scope.patients = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // get a single patient after checking it
    $scope.getpatient = function(id) {
        $http.get('/api/patients/' + id)
            .success(function(data) {
                $scope.patientformData = data;
				$scope.patientformData._id = id;
				$scope.show_add_patient = true;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

		// get all eksetaseis . Call the function created in the eksetaseis section bellow.
		if (id)
			{
			$scope.geteksetaseis(id);
			$scope.getfarmaka(id);
			}

    };


	//	Upload all files into a temp folder. Then call the callback function to continue the operations as usual.
	$scope.upload_files = function ( element_array, _callback )  {
		//function that uploads files in /upload/temp/ folder
		var fd = new FormData();
		var arrayLength = element_array.length;
		for (var i = 0; i < arrayLength; i++) {
			if (document.getElementById(element_array[i]))
				fd.append("datafile",document.getElementById(element_array[i]).files[0]);
		}

        $http.post('/api/upload', fd ,{
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined }
			})
            .success(function(data) {
				_callback();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
		//function that uploads files in /upload/temp/ folder

	}

	$scope.uploadpatientformDataFile = function(files,element_name) {
		$scope.patientformData[element_name] = files[0].name;
	}

	$scope.uploadeksetashFormDataFile = function(files,element_name) {
		$scope.eksetashFormData[element_name] = files[0].name;
	}

    // when submitting the add form, send the text to the node API
    $scope.createPatient = function() {
	$scope.element_array = ["patient_file1" , "patient_file2"];
	$scope.upload_files($scope.element_array,function ( ) {

        $http.post('/api/patients', $scope.patientformData )
            .success(function(data) {
                $scope.patientformData = {}; // clear the form so our user is ready to enter another
                $scope.patients = data;
                console.log(data);
				$scope.show_add_patient = false;
				$scope.patientformData.hmeromhnia_eggrafhs = new Date();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
		});
    };

    // when submitting the add form, send the text to the node API
    $scope.updatePatient = function(id) {
	$scope.element_array = ["patient_file1" , "patient_file2"];
	$scope.upload_files($scope.element_array,function ( ) {

        $http.put('/api/patients/'+id, $scope.patientformData)
            .success(function(data) {
                $scope.patientformData = {}; // clear the form so our user is ready to enter another
                $scope.patients = data;
				$scope.show_add_patient = false;
				$scope.patientformData.hmeromhnia_eggrafhs = new Date();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
		});
    };

    // delete a patient after checking it
    $scope.deletepatient = function(id) {
		if (!confirm('Είσαστε βέβαιος για την διαγραφή του ασθενούς;')) {
			return;
		}

        $http.delete('/api/patients/' + id)
            .success(function(data) {
                $scope.patients = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // when canceling the add form, clear the form
    $scope.cancelPatient = function() {
		$scope.patientformData = {};
		$scope.patientformData.hmeromhnia_eggrafhs = new Date();
		$scope.show_add_patient=false;

    };






    // get all eksetaseis
    $scope.geteksetaseis = function(id) {
        $http.get('/api/eksetaseis/' + id)
            .success(function(data) {
                $scope.eksetaseis = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // get a single patient after checking it
    $scope.get_single_eksetash = function(id) {
        $http.get('/api/eksetaseis/by_id/' + id)
            .success(function(data) {
                $scope.eksetashFormData = data;
				$scope.show_add_eksetash=true;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // when submitting the add form, send the text to the node API
    $scope.createEksetash = function(id) {
		delete $scope.eksetashFormData._id;
	//	$scope.eksetashFormData.hmeromhnia = new Date();
		$scope.element_array = ["eksetash_file1" , "eksetash_file2" , "eksetash_file3" , "eksetash_file4" , "eksetash_file5" , "eksetash_file6" , "eksetash_file7" , "eksetash_file8"];

	$scope.upload_files($scope.element_array,function ( ) {


        $http.post('/api/eksetaseis/'+id, $scope.eksetashFormData)
            .success(function(data) {
				$scope.eksetaseis = data;
				$scope.eksetashFormData ={};
				//TODO clean the input file elements.
				$scope.show_add_eksetash=false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

		});


    };

    // when submitting the update form, send the text to the node API
    $scope.updateEksetash = function(id) {
		$scope.element_array = ["eksetash_file1" , "eksetash_file2" , "eksetash_file3" , "eksetash_file4" , "eksetash_file5" , "eksetash_file6" , "eksetash_file7" , "eksetash_file8"];

	$scope.upload_files($scope.element_array,function ( ) {


        $http.put('/api/eksetaseis/'+id, $scope.eksetashFormData)
            .success(function(data) {
				$scope.eksetaseis = data;
				$scope.eksetashFormData ={};
				//TODO clean the input file elements.
				$scope.show_add_eksetash=false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
		});
    };
	
	
    $scope.cancelEksetash = function(id) {
		$scope.eksetashFormData ={};
		$scope.show_add_eksetash=false;
    };

    // delete single eksetaseis
    $scope.delete_single_eksetash = function(eksetash_id,patient_id) {
		
		if (!confirm('Είσαστε βέβαιος για την διαγραφή της εξέτασης;')) {
			return;
		}
		
        $http.delete('/api/eksetaseis/by_id/'+eksetash_id+'/'+patient_id)
            .success(function(data) {
                $scope.eksetaseis = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // get all farmaka
    $scope.getfarmaka = function(id) {
        $http.get('/api/farmaka/' + id)
            .success(function(data) {
                $scope.farmaka = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // get a single patient after checking it
    $scope.get_single_farmako = function(id) {
        $http.get('/api/farmaka/by_id/' + id)
            .success(function(data) {
                $scope.farmakoFormData = data;
				$scope.show_add_farmako=true;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // when submitting the add form, send the text to the node API
    $scope.createFarmako = function(id) {
		// Fix in case we want to add a new eksetash by using data from an existing one.
		delete $scope.farmakoFormData._id;

        $http.post('/api/farmaka/'+id, $scope.farmakoFormData)
            .success(function(data) {
				$scope.farmaka = data;
				$scope.farmakoFormData ={};
				//TODO clean the input file elements.
				$scope.show_add_farmako=false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // when submitting the add form, send the text to the node API
    $scope.updateFarmako = function(id) {
	$http.put('/api/farmaka/'+id, $scope.farmakoFormData)
		.success(function(data) {
			$scope.farmaka = data;
			$scope.farmakoFormData ={};
			//TODO clean the input file elements.
			$scope.show_add_farmako=false;

		})
		.error(function(data) {
			alert("updateFarmako FAIL");
			console.log('Error: ' + data);
		});

    };


    $scope.cancelFarmako = function(id) {
		$scope.farmakoFormData ={};
		$scope.show_add_farmako=false;
    };

    // delete single farmako
    $scope.delete_single_farmako = function(farmako_id,patient_id) {
		if (!confirm('Είσαστε βέβαιος για την διαγραφή του φαρμάκου;')) {
			return;
		}

        $http.delete('/api/farmaka/by_id/'+farmako_id+'/'+patient_id)
            .success(function(data) {
                $scope.farmaka = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

//////////////////

    $scope.setTab = function(newValue){
	  $scope.show_tab = newValue;
    };

    $scope.isTabSet = function(tabName){
      return $scope.show_tab === tabName;
    };

  });

  app.controller('StoreController', function(){
	  ;
  });


  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });



})();
