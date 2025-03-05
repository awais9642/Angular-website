import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartformComponent } from './cartform.component';

describe('CartformComponent', () => {
  let component: CartformComponent;
  let fixture: ComponentFixture<CartformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
