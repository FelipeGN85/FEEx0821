import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  code: string = '';
  grid: string = '';
  paymentsList: any = [];
  paymentForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      name:[''],
      ammount:[''],
      code: ['',Validators.required],
      grid: ['',Validators.required]
    });
   }


  ngOnInit(): void {
    setInterval(() => { this.getGridCode()  }, 1 * 1000);
  }

  getGridCode() {
    this.code = localStorage.getItem('code')?.toString() || '';
  }

  addPayment() {
    this.paymentForm.patchValue({code: localStorage.getItem('code')?.toString()});
    this.paymentForm.patchValue({grid: localStorage.getItem('grid')?.split(',')});
    this.paymentsList.push(this.paymentForm.value);
    this.paymentForm.reset();
  }

}
