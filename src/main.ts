import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularJSGlobal } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// angularJS
import * as angular from 'angular';
setAngularJSGlobal(angular);
import 'angular-ui-router/release/angular-ui-router.min';
import 'angular-aria/angular-aria';
import 'angular-animate/angular-animate';
import 'angular-material/angular-material';
import './app/ajs-ng-app/app.module';
import './app/ajs-ng-app/components/page3.component';

if (environment.production) {
  enableProdMode();
}

// Ensure AngularJS destroys itself on hot reloads.
const rootElement = angular.element(document.body);
const oldInjector = rootElement.injector();
if (oldInjector) {
  oldInjector.get('$rootScope').$destroy();
  rootElement.data('$injector', null);
}

// Ensure Angular destroys itself on hot reloads.
if (window['ngRef']) {
  window['ngRef'].destroy();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(ref => window['ngRef'] = ref)
  .catch(err => console.log(err));
