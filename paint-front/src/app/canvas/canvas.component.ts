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
  isDrawing: boolean = false;

  @ViewChild('canvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;
  private canvasCtx!: CanvasRenderingContext2D | null;

  @Input() tool: string = '';
  @Input() color: string = '#000000';

  ngAfterViewInit(): void {
    if (this.canvas) {
      this.canvasCtx = this.canvas.nativeElement.getContext('2d');
    }
  }

  shouldDraw(event: MouseEvent) {
    if (event.button === 0) this.isDrawing = true;
  }

  draw(event: MouseEvent) {
    if (event.buttons !== 1) return;
    if (!this.canvasCtx) return;
    if (!this.isDrawing) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.canvasCtx.fillStyle = this.color;

    this.canvasCtx.beginPath();
    this.canvasCtx.arc(x, y, 5, 0, Math.PI * 2);
    this.canvasCtx.fill();
  }
}
