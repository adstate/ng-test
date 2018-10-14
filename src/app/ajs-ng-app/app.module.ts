import { Router, UrlHandlingStrategy } from '@angular/router';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { Page2Component } from '../components/page2/page2.component';
import { AppComponent } from '../app.component';

import * as angular from 'angular';

let app = angular.module('testApp', ['ui.router', 'ngMaterial']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$injector',
  function($stateProvider, $locationProvider, $urlRouterProvider, $injector) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise(($injector, $location) => {
      let $state = $injector.get('$state');
      let url = $location.url();

      // let ng6Router = $injector.get('ng6Router');
      // let ng6UrlHandlingStrategy = $injector.get('ng6UrlHandlingStrategy');
      //
      // if (ng6UrlHandlingStrategy.shouldProcessUrl(url)) {
          $state.go('empty');
      //  }
    });

    $stateProvider
      .state('page2', {
        url: '/page2',
        // resolve: {
        //   route: () => $injector.get('ng6Router')
        // },
        template: '<page2-component></page2-component>'

      })
      .state('empty', {
        template: ''
      })

   }]);

app.factory('ng6Router', downgradeInjectable(Router));
app.factory('ng6UrlHandlingStrategy', downgradeInjectable(UrlHandlingStrategy));

// angular.module('testApp').controller('MainCtrl', function () {
//     this.message = 'MainCtrl';
// });

app.directive('page2Component', downgradeComponent({ component: Page2Component }));

app.directive('routerLink', (ng6Router) => {
  return {
    restrict: 'A',
    scope: {
      routerLink: '@',
      queryParams: '=queryParams'
    },
    link: function(scope, element, attr) {
      element.on('click', () => {
        ng6Router.navigate([scope.routerLink], { queryParams: scope.queryParams });
      });
    }
  };
});
