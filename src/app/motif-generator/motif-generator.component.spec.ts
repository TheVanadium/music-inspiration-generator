import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifGeneratorComponent } from './motif-generator.component';

describe('MotifGeneratorComponent', () => {
  let component: MotifGeneratorComponent;
  let fixture: ComponentFixture<MotifGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotifGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MotifGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
