import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ajsLocation } from '../../ajs-ng-app/ajs-upgraded-providers';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {

  init2: string;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private $location: ajsLocation
  ) { }

  ngOnInit() {
    //console.log(this.route.snapshot.queryParamMap);
    //this.init2 = this.route.snapshot.queryParamMap.get('init2');
    this.init2 = this.$location.search().init2;

    if (!this.init2) {
      this.subscription = this.route.queryParams.subscribe(params => {
        this.init2 = params['init2'];
      });
    }

  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
