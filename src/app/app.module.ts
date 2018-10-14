import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Page2Component } from './components/page2/page2.component';
import { UpgradedPage3Component } from './components/upgraded-page3/upgraded-page3.component';

@Component({selector: 'empty', template: ''})
class EmptyComponent {}
//
// export class CustomUrlHandlingStrategy  implements UrlHandlingStrategy {
//   shouldProcessUrl(url) {
//     return url.toString().startsWith("/page");
//   }
//   extract(url) { return url; }
//   merge(url, whole) { return url; }
// }

const routes: Routes = [
  { path: 'page2', component: EmptyComponent },
  { path: 'page3', component: UpgradedPage3Component },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    Page2Component,
    UpgradedPage3Component,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    //material
    MatToolbarModule,
    MatInputModule

  ],
  entryComponents: [
    Page2Component,
    AppComponent
  ],
  providers: [
    // { provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) {}
  //  ngDoBootstrap() {
  //    this.upgrade.bootstrap(document.body, ['testApp'], { strictDi: true });
  //  }
}
