import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentColorComponent } from './current-color.component';

describe('CurrentColorComponent', () => {
  let component: CurrentColorComponent;
  let fixture: ComponentFixture<CurrentColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
