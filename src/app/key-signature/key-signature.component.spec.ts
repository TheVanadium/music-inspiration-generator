import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySignatureComponent } from './key-signature.component';

describe('KeySignatureComponent', () => {
  let component: KeySignatureComponent;
  let fixture: ComponentFixture<KeySignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeySignatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeySignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
