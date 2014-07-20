var app = angular.module('calltransfer',[]);

app.controller("mainController", function($scope, $http){

	var host_url = "http://localhost:8080/services/";
	/* FOR TESTING ONLY */
	var username = "mishak";
	var api_token = "hoc0297702ia0kfkpyn8";
	//$scope.get_result = {};
	$scope.transfer_list = [];
	var request = {};
    var get_result = {};
    $scope.today_text = "";

	$scope.init = function (){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var mmStr = "";
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd
        } 

        if(mm<10) {
            mmStr='0'+mm
        } 
        var months = ["January", "February", "March", "April", "May", "June", "July","August", "September","October","November","December"];
        $scope.date_input = yyyy+'-'+mm+'-'+dd;
        $scope.today_text = dd+' '+months[mm - 1]+' '+yyyy;
		getTodayTransfer();
	}

	$scope.add_transfer = function (){
        //console.log("This is a test");
		request.agent = $scope.agent_input;
		request.account = $scope.account_input;
		request.date = $scope.date_input;
		request.user = username;
		request.apiToken = api_token;
        //console.log(request);
		getResultPOST(host_url+"transfers/transfer/add", request);
	}    

	function getTodayTransfer(){
		getResultGET(host_url+"transfers/today?user="+username+"&apiToken="+api_token);
        //$scope.transfer_list = $scope.transfer_list.transferList;
		//console.log($scope.transfer_list);
	}

	function getResultGET(url){
        $http.get(url).success(function(data) {
            //console.log(data);
            $scope.transfer_list = data.transferList;
        }).error(function(error) {
 
        });
    }

    function getResultPOST(url, data){
        $http.post(url, data).success(function(data) {
            //console.log(data);
            var added = {};
            added.account = {};
            added.agent = {};
            added.agent.username = $scope.agent_input;
            added.account.acctNum = $scope.account_input;
            $scope.transfer_list.push(added);
            console.log($scope.transfer_list);
            $('#myModal').modal();
        }).error(function(error) {
 			
        });
    }


});





