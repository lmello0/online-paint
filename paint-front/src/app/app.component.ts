import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CurrentColorComponent } from './current-color/current-color.component';

@Component({
  selector: 'app-root',
  imports: [
    ColorPickerComponent,
    ToolbarComponent,
    CanvasComponent,
    CurrentColorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'online-paint';

  tool: string = 'pen';
  color: string = '#000000';

  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef;

  width: number = 0;
  height: number = 0;

  ngAfterViewInit(): void {
    this.updateCanvasSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateCanvasSize();
  }

  setTool(event: string) {
    this.tool = event;
  }

  setColor(event: string) {
    this.color = event;
  }

  private updateCanvasSize() {
    if (this.canvasContainer) {
      this.width = this.canvasContainer.nativeElement.clientWidth;
      this.height = this.canvasContainer.nativeElement.clientHeight;
    }
  }
}
