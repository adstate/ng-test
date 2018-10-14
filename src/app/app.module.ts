import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
import { RouterModule, Routes, Router, UrlHandlingStrategy } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { UpgradedPage3Component } from './components/upgraded-page3/upgraded-page3.component';

@Component({selector: 'empty', template: ''})
class EmptyComponent {}

export class CustomUrlHandlingStrategy  implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return !url.toString().startsWith("/page2");
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

const routes: Routes = [
  { path: 'page2', component: EmptyComponent },
  { path: 'page3', component: UpgradedPage3Component },
  { path: '**', component: Page1Component }

];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    UpgradedPage3Component,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {initialNavigation: true}),

    //material
    MatToolbarModule,
    MatInputModule,
    MatButtonModule

  ],
  entryComponents: [
    Page2Component,
    AppComponent
  ],
  providers: [
    //{ provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) {}
  //  ngDoBootstrap() {
  //    this.upgrade.bootstrap(document.body, ['testApp'], { strictDi: true });
  //  }
}
