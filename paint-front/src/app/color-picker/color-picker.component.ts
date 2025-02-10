import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { COLOR_PALETTE } from './constants/color-palette';
import { Color } from './interface/color';

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css',
})
export class ColorPickerComponent {
  readonly ROW_QUANTITY = 2;
  colorPalette = COLOR_PALETTE;

  @ViewChild('customColorInput') customColorInput!: ElementRef;
  @ViewChild('customColorDiv') customColorDiv!: ElementRef;

  colorPickerTouchedYet: boolean = false;

  selectedColor: string = '';
  selectedColorDiv: HTMLElement | null = null;

  @Output() colorEventEmitter = new EventEmitter<string>();

  updateColor(): void {
    const currentColor = this.customColorInput.nativeElement.value;
    this.customColorDiv.nativeElement.style.backgroundColor = currentColor;
  }

  onColorPickerClick() {
    this.customColorDiv.nativeElement.classList.remove('rainbow');
    this.updateColor();
  }

  selectColor(event: Event, color: Color) {
    console.log(this.colorPalette.length);

    const selectedClassOutline = 'selected';

    this.selectedColorDiv?.classList.remove(selectedClassOutline);

    this.selectedColorDiv = event.target as HTMLElement;
    this.selectedColor = color.hexCode;

    this.selectedColorDiv.classList.add(selectedClassOutline);
    this.colorEventEmitter.emit(this.selectedColor);
  }
}
