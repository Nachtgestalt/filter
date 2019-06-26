import {AfterViewInit, Directive, ElementRef, Inject, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements OnChanges {
  @Input()
  focus: boolean;

  constructor(@Inject(ElementRef) private element: ElementRef) {
  }

  ngOnChanges() {
    this.element.nativeElement.focus();
  }
}
