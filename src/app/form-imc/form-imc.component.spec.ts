import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImcComponent } from './form-imc.component';

describe('FormImcComponent', () => {
  let component: FormImcComponent;
  let fixture: ComponentFixture<FormImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormImcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
