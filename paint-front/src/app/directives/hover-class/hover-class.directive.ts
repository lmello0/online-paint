import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover-class]',
})
export class HoverClassDirective {
  constructor(public elementRef: ElementRef) {}

  @Input('hover-class') hoverClasses!: string;

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.hoverClasses) {
      return;
    }

    const classes = this.hoverClasses.split(' ');

    classes.forEach((c) => {
      if (c === '') {
        return;
      }

      this.elementRef.nativeElement.classList.add(c);
    });
  }

  @HostListener('mouseleave') onMouseLeave() {
    const classes = this.hoverClasses.split(' ');

    classes.forEach((c) => {
      if (c === '') {
        return;
      }

      this.elementRef.nativeElement.classList.remove(c);
    });
  }
}
