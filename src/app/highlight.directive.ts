import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() color = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.color || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground('');
  }

  private setBackground(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
