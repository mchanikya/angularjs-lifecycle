(function(){
	'use strict';
	angular.module("lifeCycleDemoApp",[])
	.component("myComp",{
		templateUrl:"myComp.template.html",
		controller:lifeCycleController,
		bindings:{
			nvalue:'@',
			oneway:'<',
			twoway:'=',
		}
	})
	.controller("lifeCycleController",lifeCycleController);


	function lifeCycleController(){
		var $ctrl=this;
		$ctrl.oneValue="1";
		$ctrl.twoValue="2";
		$ctrl.title="sdfsdf";
		$ctrl.showComponent=true;

		$ctrl.$onInit=function(){
			console.log("In onInit");
		};

		$ctrl.$onChanges=function (changedObj) {
			console.log(changedObj);
		};

		$ctrl.$onDestroy=function () {
			console.log("onDestroy");
		};

		$ctrl.$postLink=function(){
			console.log("In postLink");
		};

		$ctrl.compVisibility=function () {
			if ($ctrl.showComponent) {
				$ctrl.showComponent=false;
			}else{
				$ctrl.showComponent=true;
			}
		}

	}

})();