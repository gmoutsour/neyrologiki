(function() {
  var app = angular.module('HeaderModule', []);

var app = angular.module('HeaderModule', [])
.filter('customuppercase', function() {
  return function(input) {
    if(input.length > 20) {
      return input.toUpperCase();
    } else {
      return input;
    }
  };
})  

  
  app.controller('HeaderController', function() {
	  
	this.title="my test222";
	this.tab = 4;

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
	
    this.setTitle = function() {
      this.title = "New titlewwwwwwwwwwwwwwwwwww";
    };

  
  });

  
  app.controller('StoreController', function() {
	this.title="my test";
	

	
  });


  
	
	
})();
