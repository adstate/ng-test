import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
<<<<<<< HEAD
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';
import { uiRouterProvider } from './ajs-ng-app/ajs-upgraded-providers';
=======
import { RouterModule, Routes, Router, UrlHandlingStrategy } from '@angular/router';
>>>>>>> feature/url-handle

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { UpgradedPage3Component } from './components/upgraded-page3/upgraded-page3.component';
<<<<<<< HEAD

@Component({selector: 'empty', template: ''})
class EmptyComponent {}
//
export class CustomUrlHandlingStrategy  implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith("/page3");
=======
import { locationProvider } from './ajs-ng-app/ajs-upgraded-providers';

export class CustomUrlHandlingStrategy  implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return !url.toString().startsWith("/page2");
>>>>>>> feature/url-handle
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}
<<<<<<< HEAD

const routes: Routes = [
  //{ path: 'page2', component: EmptyComponent },
  { path: 'page3', component: UpgradedPage3Component },
  { path: '**', component: PageNotFoundComponent }

];
=======
>>>>>>> feature/url-handle

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    UpgradedPage3Component
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    //material
    MatToolbarModule,
    MatInputModule,
    MatButtonModule

  ],
  entryComponents: [
    Page2Component
  ],
  providers: [
<<<<<<< HEAD
    //uiRouterProvider
     //{ provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy }
=======
    locationProvider,
    { provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy }
>>>>>>> feature/url-handle
  ],
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
   ngDoBootstrap() {
     this.upgrade.bootstrap(document.body, ['testApp'], { strictDi: true });
   }
}
