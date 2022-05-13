import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private el: ElementRef
  ) { 
    this.el.nativeElement.style.color = 'red'; // bunu dediğimizde [appHighlight] direktifine sahip elementin rengi red olacak.
  }

}
