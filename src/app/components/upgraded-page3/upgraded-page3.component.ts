import { Component, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';


@Component({
  selector: 'upgraded-page3',
  template: '',
  providers: [{ provide: '$scope', useExisting: '$rootScope' }]
})
export class UpgradedPage3Component extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    super('page3Component', elementRef, injector);
  }

}
