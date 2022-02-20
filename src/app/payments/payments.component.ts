import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  code: string = '';
  grid: string = '';
  paymentsList: any = [];
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      ammount: ['', Validators.required],
      code: ['', Validators.required],
      grid: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    setInterval(() => { this.getGridCode() }, 1 * 1000);
  }

  getGridCode() {
    this.checkForPaymentList();
    this.code = localStorage.getItem('code')?.toString() || '';
  }

  checkForPaymentList() {
    this.paymentsList = JSON.parse(sessionStorage.getItem('payments') || '[]');
  }

  addPayment() {
    this.paymentForm.patchValue({ code: localStorage.getItem('code')?.toString() });
    this.paymentForm.patchValue({ grid: localStorage.getItem('grid')?.split(',') });
    this.paymentsList.push(this.paymentForm.value);
    this.paymentForm.reset();
    sessionStorage.setItem('payments', JSON.stringify(this.paymentsList));
  }

  goToGenerator() {
    this.router.navigate(['generator']);
    sessionStorage.setItem('payments', JSON.stringify(this.paymentsList));
  }

}
