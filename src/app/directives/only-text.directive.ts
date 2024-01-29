import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[onlyText]',
	// selector: 'form input',
	standalone: true
})
export class OnlyTextDirective {
	element: ElementRef<HTMLInputElement> = inject(ElementRef);
	ngControl = inject(NgControl, { optional: true });

	@HostListener('input') onInput(): void {
		const value = this.element.nativeElement.value;

		const regex = /^[a-zA-Z\s]*$/;

		if (!regex.test(value)) {
			this._setValue(value);
		}
	}

	private _setValue(value: string): void {
		const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
		if (this.ngControl) {
			this.ngControl.control!.setValue(cleanValue);
		} else {
			this.element.nativeElement.value = cleanValue;
		}
	}

	//#region CAMBIAR EL VALOR SOLO CON EL TARGET DEL INPUT

	// @HostListener('input', ['$event']) onInput(event: Event): void {
	// 	const inputElement = event.target as HTMLInputElement;

	// 	const regex = /^[a-zA-Z\s]*$/;

	// 	if (!regex.test(inputElement.value)) {
	// 		this._setValue(inputElement);
	// 	}
	// }

	// private _setValue(inputElement: HTMLInputElement): void {
	// 	const cleanValue = inputElement.value.replace(/[^a-zA-Z\s]/g, '');

	// 	if (this.ngControl) {
	// 		this.ngControl.control!.setValue(cleanValue);
	// 	} else {
	// 		inputElement.value = cleanValue;
	// 	}
	// }
	//#endregion
}
