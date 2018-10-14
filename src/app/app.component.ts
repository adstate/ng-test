import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private upgrade: UpgradeModule) {

  }

  ngOnInit() {
<<<<<<< HEAD
    //this.upgrade.bootstrap(document.body, ['testApp'], { });
=======
    this.upgrade.bootstrap(document.body, ['testApp']);
>>>>>>> feature/url-handle
  }
}
