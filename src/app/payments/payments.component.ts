import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
code: string = '';
  constructor() { }

  ngOnInit(): void {
    setInterval(() => { this.getCode() }, 1 * 1000);
  }
  getCode() {
    this.code = localStorage.getItem('code')?.toString() || '';
  }

}
