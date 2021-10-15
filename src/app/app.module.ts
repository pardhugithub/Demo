import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MatSliderModule } from '@angular/material/slider';

import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import { MenuThemeComponent } from './menu-theme/menu-theme.component';
@NgModule({
  declarations: [AppComponent, MatSliderComponent, NavComponent, HomeComponent, ParentComponent, ChildComponent, RxjsComponent, HighlightDirective, ReactiveFormsComponent, DynamicFormComponent, TemplateDrivenComponent, MenuThemeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-unversal' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
