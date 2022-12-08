import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDescriptionComponent } from './music-description.component';

describe('MusicDescriptionComponent', () => {
  let component: MusicDescriptionComponent;
  let fixture: ComponentFixture<MusicDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
