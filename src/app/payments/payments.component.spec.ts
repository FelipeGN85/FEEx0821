import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentsComponent } from './payments.component';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ { provide: Router, useValue: '' }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have labels', () => {
    expect(component).withContext('YOUR CODE NOW:').toBeTruthy();
    expect(component).withContext('PAYMENT').toBeTruthy();
    expect(component).withContext('AMMOUNT').toBeTruthy();
    expect(component).withContext('+ ADD').toBeTruthy();
    expect(component).withContext('Name').toBeTruthy();
    expect(component).withContext('Ammount').toBeTruthy();
    expect(component).withContext('Code').toBeTruthy();
    expect(component).withContext('Grid').toBeTruthy();
  });
});
