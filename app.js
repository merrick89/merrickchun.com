(function(){
	var app = angular.module('merrick', []);

	app.directive('navigation', function(){
		return{
			restrict: 'E',
			templateUrl: 'templates/navigation.html',
			controller: function(){
				tab = 0;
				this.linkslist = links;

				this.selectTab = function(setTab){
					tab = setTab;
				};
				this.isSelected = function(checkTab){
					return tab === checkTab;
				};
			},
			controllerAs: 'panel'
		}
	});

	var links = [
		{
			id:'0',
			name:'About'
		},
		{
			id:'1',
			name:'Front-end'
		},
		{
			id:'2',
			name:'Design'
		},
		{
			id:'3',
			name:'Projects'
		}
	];

})();