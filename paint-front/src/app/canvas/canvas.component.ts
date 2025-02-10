import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-canvas',
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css',
})
export class CanvasComponent implements AfterViewInit {
  @Input() width: number = 0;
  @Input() height: number = 0;

  isDrawing: boolean = false;

  @ViewChild('canvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;
  private canvasCtx!: CanvasRenderingContext2D | null;

  @Input() tool: string = 'pencil';
  @Input() color: string = '#000000';

  lastX: number = 0;
  lastY: number = 0;

  ngAfterViewInit(): void {
    if (this.canvas) {
      this.canvasCtx = this.canvas.nativeElement.getContext('2d');
    }
  }

  shouldDraw(event: MouseEvent) {
    if (event.button !== 0) return;
    if (!this.canvasCtx) return;

    this.isDrawing = true;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    this.lastX = event.clientX - rect.left;
    this.lastY = event.clientY - rect.top;

    this.canvasCtx.beginPath();
    this.canvasCtx.moveTo(this.lastX, this.lastY);
  }

  draw(event: MouseEvent) {
    if (event.buttons !== 1) return;
    if (!this.canvasCtx) return;
    if (!this.isDrawing) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.canvasCtx.strokeStyle = this.color;
    this.canvasCtx.lineWidth = 5; // TODO: implement brush size
    this.canvasCtx.lineCap = 'round';
    this.canvasCtx.lineJoin = 'round';

    this.canvasCtx.lineTo(x, y);
    this.canvasCtx.stroke();

    this.lastX = x;
    this.lastY = y;
  }
}
