import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  constructor() {}

  ngOnInit(): void {
    this.customers = [
      {
        name: 'pardhu',
        email: 'pardhu.demo@gmail.com',
        mobile: '+1 408 444 4567',
      },
      {
        name: 'Demo',
        email: 'demo@gmail.com',
        mobile: '+1 408 444 4567',
      },
    ];
  }
}
interface Customer {
  name: string;
  email: string;
  mobile: string;
}
