import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    DynamicFormComponent,
    TemplateDrivenComponent,
  ],
  imports: [CommonModule, FormsRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [
    ReactiveFormsComponent,
    DynamicFormComponent,
    TemplateDrivenComponent,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class FormsPModule {}
