import { Page2Component } from '../components/page2/page2.component';
import {AppComponent } from '../app.component';
import { downgradeComponent } from '@angular/upgrade/static';
// declare var angular;
import * as angular from 'angular';

angular
  .module('testApp', ['ui.router', 'ngMaterial'])
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('page2', {
          url: '/page2',
          template: '<page2-component></page2-component>'
          //template: '<page3-component></page3-component>'
        })
        .state('page3', {
          url: '/page3',
          template: ''
        })

      //$stateProvider.otherwise({template : ''});


    }]);

angular.module('testApp').controller('MainCtrl', function () {
    this.message = 'MainCtrl';
});

angular.module('testApp').directive('page2Component', downgradeComponent({ component: Page2Component }));
// angular.module('testApp').directive('appRoot', downgradeComponent({ component: AppComponent }));
