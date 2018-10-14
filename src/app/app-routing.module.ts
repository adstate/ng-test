import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Page2Component } from './components/page2/page2.component';
import { UpgradedPage3Component } from './components/upgraded-page3/upgraded-page3.component';

const routes: Routes = [
  { path: 'page3', component: UpgradedPage3Component },
  //{ path: 'page2', component: EmptyComponent },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
