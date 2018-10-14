import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  init2: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //console.log(this.route.snapshot.queryParamMap);
    //this.init2 = this.route.snapshot.queryParamMap.get('init2');

    console.log(this.router.url);

    this.route.queryParams.subscribe(
      params => this.init2 = params['init2']
    );

  }

}
