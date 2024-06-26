import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComComponent } from './cart-com.component';

describe('CartComComponent', () => {
  let component: CartComComponent;
  let fixture: ComponentFixture<CartComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
