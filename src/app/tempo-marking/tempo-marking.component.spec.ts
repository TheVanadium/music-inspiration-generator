import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoMarkingComponent } from './tempo-marking.component';

describe('TempoMarkingComponent', () => {
  let component: TempoMarkingComponent;
  let fixture: ComponentFixture<TempoMarkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempoMarkingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TempoMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
