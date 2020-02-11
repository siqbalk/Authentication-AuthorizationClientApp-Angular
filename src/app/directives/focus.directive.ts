import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[tmFocus]' })
// tslint:disable-next-line:directive-class-suffix
export class Focus implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer) {
        // focus won't work at construction time - too early
    }

    ngOnInit() {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    }
}
