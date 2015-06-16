angular.module("docflow", [
	"angular-meteor",
	"ngMaterial",
]);

function onReady() {
	angular.bootstrap(document, ["docflow"]);
}

if (Meteor.isCordova)
	angular.element(document).on("deviceready", onReady);
else
	angular.element(document).ready(onReady);


angular.module("docflow").controller("BooksListCtrl", 
	["$scope", "$rootScope", 
	function($scope, $rootScope){
		$scope.teams = [{ name: "T1" }];
		$scope.data = "hello";

		$scope.isTeamAdmin = function(team) {
			console.log("isTeamAdmin");
			return false;
		};		
	}]);



