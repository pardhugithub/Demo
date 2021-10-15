import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.sass'],
})
export class TemplateDrivenComponent implements OnInit {
  model: any = {};
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.model);
  }
}
