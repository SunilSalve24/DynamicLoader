import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponetLoder]'
})
export class ComponetLoderDirective {
  

  constructor(public viewContainerRef: ViewContainerRef) { }

}
