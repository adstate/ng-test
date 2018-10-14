import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
    private router: Router
  ) { }

  ngOnInit() {
    //console.log(this.route.snapshot.queryParamMap);
    //this.init2 = this.route.snapshot.queryParamMap.get('init2');

    //console.log(this.router.url);
    this.subscription = this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.init2 = params['init2']
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
