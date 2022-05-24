import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('hideAfter')
  delay: number = 0;

  @Input('hideAfterThen')
  anotherTemplate: TemplateRef<any> | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.viewRef.createEmbeddedView(this.templateRef);
    setTimeout(() => {
      this.viewRef.clear();
      if (this.anotherTemplate)
        this.viewRef.createEmbeddedView(this.anotherTemplate);
    }, this.delay);
  }
}
