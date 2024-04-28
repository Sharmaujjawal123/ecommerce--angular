import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaaymentSuccsesComponent } from './paayment-succses.component';

describe('PaaymentSuccsesComponent', () => {
  let component: PaaymentSuccsesComponent;
  let fixture: ComponentFixture<PaaymentSuccsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaaymentSuccsesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaaymentSuccsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
