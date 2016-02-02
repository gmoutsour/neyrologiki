// public/core.js
var patientsDB = angular.module('patientsDB', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}


function patientController($scope, $http) {
    $scope.patientformData = {};
alert("patients start");
    // when landing on the page, get all patients and show them
    $http.get('/api/patients')
        .success(function(data) {
            $scope.patients = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createPatient = function() {
        $http.post('/api/patients', $scope.patientformData)
            .success(function(data) {
                $scope.patientformData = {}; // clear the form so our user is ready to enter another
                $scope.patients = data;
                console.log(data);
            })
            .error(function(data) {
		alert("loleeeeee");
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

}