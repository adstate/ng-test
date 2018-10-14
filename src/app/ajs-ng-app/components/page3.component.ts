import * as angular from 'angular';

angular.
  module('testApp').
  component('page3Component', {
    scope: {},
    templateUrl: 'page3.component.html',
    controller: ['$location', '$scope', function ($location, $scope) {
      let ctrl = this;

      this.init3 = $location.search().init3;

      $scope.$on("$locationChangeSuccess", function(event, newPath, oldPath) {
        ctrl.init3 = $location.search().init3;
        // console.log($location.search().init3);
      });
    }]
  });
