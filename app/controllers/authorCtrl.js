"use strict";

var myApp = angular.module("myApp",[]); //dependencies for the app go into `[]`

myApp.controller("myController", function myController($scope) {

	$scope.author = {
		"name" : "Arthur",
		"title" : "King",
		"company" : "Monarchies R Us"
	};
});  