var app = angular.module('nvp-tool',[]);


app.controller("mainController", function($scope, $http){
	$scope.pairArray = new Array();
	$scope.debug = "";
	$scope.input = "";
	$scope.inputChanged = function(){
		//$scope.debug = debugArray(splitNVP($scope.input));
		$scope.pairArray = debugArray(splitNVP($scope.input));
	};
    $scope.init = function() {
    };
	
	function checkFormat(inputStr){
		// TODO 
	}
	function splitNVP(inputStr){
		var amp =  inputStr.split('&');
		var result = new Array();
		for (var i = 0; i < amp.length; i++){
			var pair = amp[i].split('=');
			result[i] = new Array();
			result[i]['key'] = pair[0];
			result[i]['value'] = pair[1];
		}
		return result;
	}
	
	// FOR TESTING PURPOSE ONLY
	function debugArray(array){
		var result = "";
		for (var i = 0; i < array.length; i++){
			result = result + array[i]['key'];
			result = result + " => ";
			result = result + array[i]['value'];
			result = result + ";";
		}
		return result;
	}
	
    
});