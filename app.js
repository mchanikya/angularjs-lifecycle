(function(){
	'use strict';
	angular.module("lifeCycleDemoApp",[])
	.component("myComp",{
		templateUrl:"myComp.template.html",
		controller:lifeCycleController,
		bindings:{
			oneway:'<',
			twoway:'=',
			myTitle:'@title',
		}
	})
	.controller("lifeCycleController",lifeCycleController);


	function lifeCycleController(){
		var $ctrl=this;
		$ctrl.oneValue="1";
		$ctrl.twoValue="2";
		$ctrl.title="c";

		$ctrl.$onInit=function(){
			console.log("In onInit");
		};

		$ctrl.$onChanges=function (changedObj) {
			console.log(changedObj);
		};

		$ctrl.$onDestroy=function () {
			console.log("onDestroy");
		};

	}

})();