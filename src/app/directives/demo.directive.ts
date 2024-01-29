import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
	selector: 'input',
	standalone: true
})
export class DemoDirective {
	element: ElementRef<HTMLInputElement> = inject(ElementRef);
	renderer = inject(Renderer2); // UTILIZA Renderer2 para manipular al elemento HTML

	constructor() {
		this.element.nativeElement.style.backgroundColor = 'black';
		this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
	}
}
