(function() {
//  var app = angular.module('gemStore', ['ui.bootstrap']);
  var app = angular.module('doctors', ['ui.bootstrap']);

  

  
  app.controller('patientController', function($scope, $http){
	$scope.patientformData = {};
	$scope.patientformData.hmeromhnia_eggrafhs = new Date();  
    $scope.show_tab = 1;
	
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
			$scope.geteksetaseis(id);
			
    };		
		
    // when submitting the add form, send the text to the node API
    $scope.createPatient = function() {
        $http.post('/api/patients', $scope.patientformData)
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
    };
	
    // when submitting the add form, send the text to the node API
    $scope.updatePatient = function(id) {
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
    };	
	
    // delete a patient after checking it
    $scope.deletepatient = function(id) {
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
	
    // when submitting the add form, send the text to the node API
    $scope.createEksetash = function(id) {
		alert($scope.eksetashFormData);
        $http.post('/api/eksetaseis/'+id, $scope.eksetashFormData)
            .success(function(data) {
				$scope.eksetaseis = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
			
    };		



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
