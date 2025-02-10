import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'online-paint';

  tool: string = '';
  color: string = '';

  setTool(event: string) {
    this.tool = event;
  }

  setColor(event: string) {
    this.color = event;
  }
}
